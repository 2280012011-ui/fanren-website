import type { TimelineEvent } from '../types';

export const timelineEvents: TimelineEvent[] = [
  {
    id:'t-01', sortOrder:1, title:'七玄门入门', timeLabel:'凡人起点', chapter:'第1章', type:'key_decision',
    location:'越国·七玄门', relatedCharacterIds:['han-li','mo-daifu','li-feyu'], relatedArtifactIds:[],
    description:'韩立出生于越国一个普通山村，家境贫寒，因家中无力抚养被送往七玄门。在"升仙大会"中凭借机敏与毅力成为外门弟子。后被墨居仁带入神手谷，传授长春功、医术与毒术。韩立偶然获得神秘小绿瓶（掌天瓶），发现其能吸收月光催熟灵药，彻底改变了命运。当韩立发现墨居仁的真正目的是夺舍自己延寿后，以冷静与谨慎反杀对方，第一次明白修仙界弱肉强食的本质。"绝不轻信他人"的性格从此形成。凭借掌天瓶，韩立正式踏入炼气期。',
    positionPercent:{x:50.0,y:8}, branchIndex:0 },
  {
    id:'t-02', sortOrder:2, title:'黄枫谷崛起', timeLabel:'正式修仙', chapter:'黄枫谷篇', type:'breakthrough',
    location:'越国·黄枫谷', relatedCharacterIds:['han-li','chen-qiaoqian','linghu-laozu'], relatedArtifactIds:['a-top-1'],
    description:'韩立通过选拔加入越国七派之一的黄枫谷，第一次接触完整修仙体系。凭借掌天瓶催熟灵药大量炼制丹药，修为快速提升，"资源流修仙"正式成型。他养成低调谨慎习惯，隐藏实力默默积累。越国七派开启血色禁地，韩立在残酷厮杀中真正适应修仙界生存法则，并意外遇见南宫婉，埋下贯穿全书的感情线。韩立成功带回珍贵灵药获得筑基丹资格，最终依靠积累突破至筑基期，寿元与实力大幅提升，正式进入修仙界主流阶层。',
    positionPercent:{x:59.0,y:20}, branchIndex:0 },
  {
    id:'t-03', sortOrder:3, title:'魔道入侵', timeLabel:'宗门覆灭', chapter:'越国篇', type:'battle',
    location:'越国', relatedCharacterIds:['han-li','wang-chan','linghu-laozu'], relatedArtifactIds:[],
    description:'天罗国魔道六宗全面入侵越国，修仙大战爆发，无数宗门覆灭，大量修士陨落。韩立第一次亲眼见识大型修仙战争，意识到个人在时代洪流面前的渺小。黄枫谷被迫撤离，宗门体系彻底崩塌，韩立失去依靠果断逃离战场。许多人认为他胆小怕死，但正是这种极度理智与谨慎让他一次次避开灭顶之灾，"苟道修仙"成为核心生存方式。逃亡途中，韩立发现上古传送阵，意外被传送至遥远的乱星海，人生轨迹彻底改变。',
    positionPercent:{x:63.0,y:33}, branchIndex:0 },
  {
    id:'t-04', sortOrder:4, title:'虚天殿夺宝', timeLabel:'乱星海时期', chapter:'虚天殿篇', type:'treasure',
    location:'乱星海·虚天殿', relatedCharacterIds:['han-li','nangong-wan'], relatedArtifactIds:['a-top-3','a-tihunshou'],
    description:'乱星海拥有远超天南的修仙文明，星宫、妖兽海域与大量高阶修士并存，危险与机遇交织。人界顶级秘境"虚天殿"现世，韩立卷入其中与各方强者斗智斗勇。在虚天殿中，他成功夺得虚天鼎这一逆天宝物，获得大量上古传承与资源，真正拥有了与高阶修士竞争的资本。凭借虚天鼎基础，韩立收服异兽啼魂，其专门克制神魂类力量，成为韩立重要战斗伙伴。从此韩立逐渐建立完整战斗体系，迈向强者之路。',
    positionPercent:{x:59.7,y:46}, branchIndex:0 },
  {
    id:'t-05', sortOrder:5, title:'结丹结婴', timeLabel:'乱星海时期', chapter:'乱星海篇', type:'breakthrough',
    location:'乱星海', relatedCharacterIds:['han-li'], relatedArtifactIds:['a-dayanjue','a-sanzhuan-chongyuan','a-top-1'],
    description:'经过乱星海多年积累与闭关修炼，韩立成功凝结金丹，正式迈入高阶修士层次，开始被各方势力重视。此后他历经无数危险与挑战，凭借大衍诀的超凡神识和掌天瓶的无限资源，最终突破元婴期。元婴修士已是人界顶层战力，能开宗立派、威震一方。从金丹到元婴，韩立完成了从"求生者"到能够左右局势的大修士的蜕变。这段时期，他的功法体系、法宝系统与灵虫伙伴全部成型，为日后飞升奠定了基础。',
    positionPercent:{x:50.9,y:60}, branchIndex:0 },
  {
    id:'t-06', sortOrder:6, title:'星宫大战', timeLabel:'乱星海时期', chapter:'乱星海篇末', type:'battle',
    location:'乱星海·星宫', relatedCharacterIds:['han-li','jinyin-laozu','liu-dao-jisheng'], relatedArtifactIds:['a-top-4'],
    description:'乱星海局势恶化，极阴老祖与六道极圣先后成为韩立的大敌。韩立凭借神识优势与多件古宝，以弱胜强击败极阴老祖。此后，六道极圣领导的逆星盟与星宫全面开战，韩立联合星宫以元婴修为参与这场顶级大战。最终六道极圣陨落，乱星海势力重新洗牌。韩立也在这场大战中声名鹊起，斩获元磁神山等至宝，真正在乱星海站稳脚跟，成为备受敬畏的元婴大修。',
    positionPercent:{x:41.6,y:72}, branchIndex:0 },
  {
    id:'t-07', sortOrder:7, title:'天南归来', timeLabel:'重返故土', chapter:'天南篇', type:'key_decision',
    location:'天南', relatedCharacterIds:['han-li','yin-yue'], relatedArtifactIds:[],
    description:'多年后，韩立重新返回天南。曾经熟悉的修仙界早已物是人非，而韩立也不再是当年的低阶弟子。昔日只能仰望的强者，如今已无法轻易威胁到他。天南顶级秘境"坠魔谷"开启，上古古魔逐渐苏醒，整个修仙界危机降临。韩立在坠魔谷中经历连番大战，接触到更高层次的隐秘。在此过程中，银月正式成为韩立的重要伙伴，两人之间更像真正并肩同行的同伴。韩立真正以强者之势重新面对故土。',
    positionPercent:{x:37.1,y:80}, branchIndex:0 },
  {
    id:'t-08', sortOrder:8, title:'昆吾山之战', timeLabel:'大晋篇', chapter:'大晋篇', type:'battle',
    location:'大晋·昆吾山', relatedCharacterIds:['han-li','wentian-ren'], relatedArtifactIds:['a-top-5','a-top-6','a-top-7'],
    description:'为寻找更高境界与飞升之路，韩立来到人界最强修仙地域——大晋。这里汇聚着化神修士、上古宗门与顶级势力。昆吾山封印松动，古魔现世，各方顶级修士展开大战，通天灵宝、空间裂缝与上古禁制接连出现。韩立在此之前已获得八灵尺、梵圣真魔功等至宝，同时在落云宗宗主温天仁的看重下获得宗门庇护。这一战是人界篇规模最大的顶级战争，韩立以绝强实力参与其中，进一步巩固人界巅峰地位。',
    positionPercent:{x:39.8,y:86}, branchIndex:0 },
  {
    id:'t-09', sortOrder:9, title:'化神大圆满', timeLabel:'人界巅峰', chapter:'人界篇末', type:'breakthrough',
    location:'大晋→飞升通道', relatedCharacterIds:['han-li'], relatedArtifactIds:['a-top-1','a-dayanjue','a-fansheng-zhenmogong'],
    description:'韩立终于突破化神期，达到人界极限修为。在灵气衰竭的人界中，化神已是修士所能达到的最高境界。韩立凭借掌天瓶、大衍诀、梵圣真魔功等逆天传承，以深厚根基在人界接近无敌。他集齐飞升所需的一切条件，准备迎接最后的挑战——打开飞升通道，进入传说中的灵界。从山村少年到人界至强，韩立走完了最艰难的"凡人修仙"之路。',
    positionPercent:{x:48.2,y:90}, branchIndex:0 },
  {
    id:'t-10', sortOrder:10, title:'飞升灵界', timeLabel:'新的征程', chapter:'人界篇终章', type:'key_decision',
    location:'飞升通道→灵界', relatedCharacterIds:['han-li','nangong-wan','yin-yue'], relatedArtifactIds:['a-top-1','a-top-2'],
    description:'韩立历经雷劫与空间风暴，成功打开飞升通道，踏入灵界。至此，一个资质普通的山村少年，凭借谨慎坚韧与无数机缘，真正完成了"凡人修仙"的传奇。灵界是一个全新的世界——灵气充沛、强者如云、万族林立。韩立带着掌天瓶、青竹蜂云剑与一路走来积累的一切，开始了更加波澜壮阔的修仙之途。然而无论走到何处，那份从小养成的小心谨慎与不轻信他人的性格，永远是他最大的护身符。',
    positionPercent:{x:57.6,y:95}, branchIndex:0 },
];
