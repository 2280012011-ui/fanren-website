import { useState, useEffect, useCallback } from 'react';
import styles from './CommentWall.module.css';

interface Comment {
  id: string; text: string; time: number; likes: number;
}

export default function CommentWall() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [total, setTotal] = useState(0);
  const [text, setText] = useState('');
  const [sort, setSort] = useState<'time'|'likes'>('time');
  const [loading, setLoading] = useState(false);
  const [adminPw, setAdminPw] = useState('');
  const [showAdmin, setShowAdmin] = useState(false);
  const [liked, setLiked] = useState<Set<string>>(() => {
    try { return new Set(JSON.parse(localStorage.getItem('fanren-liked')||'[]')); } catch { return new Set(); }
  });

  const updateLiked = (s: Set<string>) => {
    setLiked(s);
    localStorage.setItem('fanren-liked', JSON.stringify([...s]));
  };

  const fetchComments = useCallback(async () => {
    const res = await fetch(`/api/comments?sort=${sort}`);
    const data = await res.json();
    setComments(data.comments || []);
    setTotal(data.total || 0);
  }, [sort]);

  useEffect(() => { fetchComments(); }, [fetchComments]);

  const submit = async () => {
    const t = text.trim().slice(0, 100);
    if (!t || loading) return;
    setLoading(true);
    await fetch('/api/comments', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({text:t}) });
    setText(''); setLoading(false); fetchComments();
  };

  const like = async (id: string) => {
    if (liked.has(id)) return;
    await fetch(`/api/comments?id=${id}`, { method:'PATCH' });
    updateLiked(new Set([...liked, id]));
    fetchComments();
  };

  const del = async (id: string) => {
    if (!adminPw) return;
    await fetch(`/api/comments?id=${id}&pw=${encodeURIComponent(adminPw)}`, { method:'DELETE' });
    fetchComments();
  };

  const fmt = (ts: number) => {
    const d = new Date(ts);
    return `${d.getMonth()+1}/${d.getDate()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>道友留言</h2>
          <span className={styles.total}>{total} 条留言</span>
          <button className={`${styles.sortBtn} ${sort==='time'?styles.sortActive:''}`} onClick={()=>setSort('time')}>最新</button>
          <button className={`${styles.sortBtn} ${sort==='likes'?styles.sortActive:''}`} onClick={()=>setSort('likes')}>最热</button>
        </div>

        <div className={styles.inputRow}>
          <input className={styles.input} value={text} onChange={e=>setText(e.target.value)} maxLength={100} placeholder="留下你的修仙感悟…（最多100字）" onKeyDown={e=>e.key==='Enter'&&submit()} />
          <span className={styles.charCount}>{text.length}/100</span>
          <button className={styles.sendBtn} onClick={submit} disabled={loading}>{loading?'发送中…':'发送传音符'}</button>
        </div>

        <div className={styles.list}>
          {comments.map(c => (
            <div key={c.id} className={styles.item}>
              <p className={styles.text}>{c.text}</p>
              <div className={styles.meta}>
                <span className={styles.time}>{fmt(c.time)}</span>
                <button className={`${styles.likeBtn} ${liked.has(c.id)?styles.liked:''}`} onClick={()=>like(c.id)} disabled={liked.has(c.id)}>
                  ✦ {c.likes}
                </button>
                {showAdmin && <button className={styles.delBtn} onClick={()=>del(c.id)} title="删除">✕</button>}
              </div>
            </div>
          ))}
          {comments.length===0 && <p className={styles.empty}>暂无留言，留下第一条修仙感悟吧 ✦</p>}
        </div>

        <div className={styles.adminRow}>
          {!showAdmin ? (
            <button className={styles.adminToggle} onClick={()=>setShowAdmin(true)}>🔑 管理</button>
          ) : (
            <div className={styles.adminBox}>
              <input className={styles.adminInput} value={adminPw} onChange={e=>setAdminPw(e.target.value)} placeholder="管理员密码" type="password" />
              <button className={styles.adminHide} onClick={()=>{setShowAdmin(false);setAdminPw('');}}>关闭</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
