import type { Artifact } from '../types';
const H = 'han-li';

export const artifacts: Artifact[] = [
  // ═══ 十大至宝 ═══
  { id:'a-top-1', name:'掌天瓶', type:'十大至宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立',
    description:'人界篇第一至宝，又名小绿瓶。外形为墨绿色古朴玉瓶，实为先天玄天至宝——天道初显时混沌所生的第一件玄天之物。瓶身坠入人界彩霞山，被韩立在七玄门时偶然捡到。核心能力：(1)吸收月光凝聚绿液，可大幅加速灵药生长，是韩立修炼突破的根本依仗；(2)完整形态可凝聚时间晶粒、穿越时空、改写因果；(3)内含混沌遗存，是击败终极BOSS古或今的关键。原为仙界九元观镇派之宝，被九元道祖所得，后因叛徒盗取失败而分离。瓶灵具有独立意识，可辅助战斗。',
    abilities:['催熟灵药','时间法则','混沌遗存','绿液凝聚'], acquisition:'七玄门彩霞山偶然拾得', firstAppearChapter:'第1章', notableUsage:'韩立修炼突破的根本依仗，贯穿全书的核心外挂' },
  { id:'a-top-2', name:'青竹蜂云剑', type:'十大至宝', grade:'法宝', ownerId:H, ownerName:'韩立',
    description:'韩立本命法宝。以万年金雷竹为材料，耗费二十年亲手炼制的七十二柄青色小剑。剑身星纹缭绕，附带辟邪神雷电弧。核心能力：(1)辟邪神雷——金雷竹自带特性，专克魔道、鬼道功法；(2)大庚剑阵——融合庚精后，三十六柄飞剑可释放无坚不摧的剑丝，连通天灵宝亦可损伤；(3)可组成剑阵群攻。金雷竹由紫灵处获得的数千年份天雷竹根茎，经掌天瓶绿液催熟至万年而成。从结丹期伴随韩立一路成长，经历多次升级强化，是人界篇韩立最核心的攻击手段。',
    abilities:['辟邪神雷','大庚剑阵','万剑齐发','剑丝切割'], acquisition:'自行炼制——以金雷竹为核心材料', firstAppearChapter:'人界篇早期', notableUsage:'韩立本命法宝，伴随整个修仙生涯' },
  { id:'a-top-3', name:'虚天鼎', type:'十大至宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立',
    description:'人界六大通天灵宝之一，号称乱星海第一至宝。三足圆鼎，乾蓝冰焰环绕。冰魄仙子遗留人间的贴身灵宝，韩立在虚天殿历经艰险夺得。核心能力：(1)乾蓝冰焰——内含极寒冰焰，可冰封冻结虚空、镇压魔气；(2)封印禁锢——放出青光青丝困住收服敌人；(3)内含补天丹，能改善修士灵根资质，韩立借此摆脱伪灵根宿命；(4)内含古宝狼首玉如意。初期韩立修为不足难以操控，元婴后期才能完全催动。器灵银月前期寄居于此。',
    abilities:['乾蓝冰焰','封印禁锢','补天丹','狼首玉如意'], acquisition:'虚天殿中历经艰险夺得', firstAppearChapter:'虚天殿篇', notableUsage:'乱星海第一至宝，改变韩立灵根资质' },
  { id:'a-top-4', name:'元磁神山', type:'十大至宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立',
    description:'顶级通天灵宝级奇物。外形为灰扑扑的山体，不起眼但威能惊人。韩立从星宫凌玉灵处获得。核心能力：(1)元磁神光——号称可破尽天下五行，克制一切五行法宝和法术；(2)灵力压制——元婴期以下修士接近会遭灵力反噬，元婴期以上在附近待太久也会修为受损；(3)物理碾压——可直接用山体砸人压人。人界篇中号称"剑阵之下第一利器"，是韩立对抗五行功法修士的王牌。韩立后期将此山炼制成元合五极山，用于抵挡雷劫。',
    abilities:['元磁神光','破尽五行','灵力压制','物理碾压'], acquisition:'星宫凌玉灵处获得', firstAppearChapter:'乱星海篇', notableUsage:'克制一切五行法宝，剑阵之下第一利器' },
  { id:'a-top-5', name:'风雷翅', type:'十大至宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立',
    description:'灵宝级飞行法宝，风雷双翼蓝光闪烁。以上古巨鸟雷鹏骸骨为材料，由妖族修士风希联合毒蛟、龟妖共同炼制，韩立在乱星海从风希手中抢夺而来。核心能力：(1)雷遁术——修仙界最神秘的遁术之一，速度如雷光电火，元婴后期韩立使用时连化神期风老怪都追不上；(2)风遁术——兼具风属性遁法；(3)蕴含风属性天地法则，可短距离空间瞬移。后期加入鲲鹏灵羽和天凤之羽升级。韩立"韩跑跑"外号的实物支撑，多次从化神/大乘修士手下逃生。',
    abilities:['雷遁术','风遁术','空间跳跃','极速飞行'], acquisition:'乱星海从风希手中抢夺', firstAppearChapter:'乱星海篇', notableUsage:'韩立跑路核心依仗，多次越阶逃生' },
  { id:'a-top-6', name:'大衍诀', type:'十大至宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立',
    description:'顶级神识修炼功法，非战斗功法但对战斗力的提升无可估量。韩立早期获得残卷，后遇到创立此功法的大衍神君获得完整传承。核心能力：(1)神识倍增——大成后神识强度可达同阶修士的2倍以上；(2)分神术——神识分裂为多份，同时操控多件法宝；(3)辅助突破——强大神识可辅助突破修为瓶颈；(4)越阶探知——神识范围远超同阶，可提前发现危险。从人界篇开始修炼，一直贯穿到灵界、仙界篇，是韩立最重要的辅助功法。',
    abilities:['神识倍增','分神术','辅助突破','越阶探知'], acquisition:'早期残卷+大衍神君完整传承', firstAppearChapter:'大衍诀篇', notableUsage:'韩立神识碾压同阶的根基' },
  { id:'a-top-7', name:'梵圣真魔功', type:'十大至宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立',
    description:'法体双修顶级炼体功法，由古魔界三大始祖之一"涅槃圣祖"根据魔界基础炼体魔功推演创立。韩立版本由三段合一：明王诀解决煞气反噬 + 托天魔功提供防御力 + 梵圣真片提供神通运用。核心神通：(1)法相金身——凝聚三头六臂法相；(2)洞漩魔光——模仿仙界轩元神光形成的强大攻击；(3)涅槃三变——最强神通，变身具备"万元之力"，肉身近乎玄天之宝般强大，能轻易碾压同阶。',
    abilities:['法相金身','洞漩魔光','涅槃三变','三头六臂'], acquisition:'大晋昆吾山所得', firstAppearChapter:'大晋篇', notableUsage:'韩立后期主修功法，碾压同阶的核心力量' },
  { id:'a-top-8', name:'噬金虫', type:'十大至宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立',
    description:'人界奇虫榜第12位。初期银白色幼虫，成熟后呈金色，群居聚成球状。核心特性：无物不噬、水火不侵，以吞噬五金与灵气为生。韩立在乱星海小寰岛洞府意外发现数百只幼虫，后以掌天瓶催熟霓裳草喂养，扩充至数万只。关键战绩：虚天殿吞噬铁火蚁群；不畏毒蛟剧毒将其啃食至仅剩精魂；昆吾山组成铠甲挡下元刹圣祖神念化身致命一击。进化路线：银白幼虫→金色成熟体→噬金虫王→噬金仙。韩立最强底牌之一。',
    abilities:['无物不噬','水火不侵','群攻无敌','吞噬五金灵气'], acquisition:'乱星海小寰岛洞府发现幼虫', firstAppearChapter:'人界篇早期', notableUsage:'韩立最强杀手锏，群攻之下无人能挡' },
  { id:'a-top-9', name:'金雷竹', type:'十大至宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立',
    description:'修仙界三大神木之一，天雷竹的万年终极形态。进化体系：白雷竹（2000年以下）→蓝雷竹（5000年以上）→金雷竹（万年以上，释放辟邪神雷）。韩立从紫灵处以低价获得一小截带根部的天雷竹残段，以掌天瓶绿液仅用20余年催熟为万年金雷竹，后利用分株特性培育出六根。核心价值：(1)释放辟邪神雷专克邪法魔功；(2)炼制青竹蜂云剑的核心材料；(3)竹叶可炼制金罡灭魔雷。人界几乎绝迹，灵界亦凤毛麟角——单根金雷竹在灵界拍卖会上拍出3.7亿灵石天价。',
    abilities:['辟邪神雷','天雷之力','顶级剑材','魔修克星'], acquisition:'紫灵处以低价获得残段，绿液催熟', firstAppearChapter:'乱星海篇', notableUsage:'炼制青竹蜂云剑+辟邪神雷的根基' },
  { id:'a-top-10', name:'八灵尺', type:'十大至宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立',
    description:'人界六大通天灵宝之一，佛门控制类灵宝。半尺长翠绿色木尺，表面布满金色纹路。上古修士昆吾三老所留，置于昆吾山镇魔塔中，为九天伏魔阵的主阵法器，与黑风旗共同镇压魔界圣祖元刹的分魂。仅能以佛家法力驱使。核心神通：(1)定身禁锢——施展时浮现银色莲影伴随佛门梵音，将敌人或法宝定住；(2)释放八只灵兽幻影辅助战斗；(3)对魔功天然克制。关键战绩：制住元婴后期大修士寒骊上人元婴；定住灭仙珠轨迹反杀强敌。韩立在昆吾山获得，偷渡灵界时自爆损坏。',
    abilities:['定身禁锢','八灵幻影','佛门克制','梵音莲影'], acquisition:'昆吾山副本所得', firstAppearChapter:'大晋篇', notableUsage:'控制类王牌，制住寒骊上人元婴' },

  // ═══ 飞剑 ═══
  { id:'a-qingzhu', name:'青竹蜂云剑（本命）', type:'飞剑', grade:'法宝', ownerId:H, ownerName:'韩立',
    description:'见十大至宝。', abilities:['辟邪神雷','大庚剑阵'], acquisition:'自行炼制', firstAppearChapter:'人界篇早期', notableUsage:'韩立本命飞剑' },
  { id:'a-jinlei', name:'金雷竹飞剑', type:'飞剑', grade:'法宝', ownerId:H, ownerName:'韩立',
    description:'以金雷竹炼制的飞剑，蕴含天雷之力，对阴邪魔修有极强克制效果。', abilities:['天雷之力','辟邪','破魔'], acquisition:'以金雷竹炼制', firstAppearChapter:'乱星海篇', notableUsage:'克制魔道修士' },
  { id:'a-72jian', name:'七十二口飞剑', type:'飞剑', grade:'法宝', ownerId:H, ownerName:'韩立',
    description:'韩立以大衍诀强大神识同时操控的完整飞剑群，共七十二口组成大庚剑阵，可释放无坚不摧的剑丝。', abilities:['剑阵','群攻','神识操控'], acquisition:'自行炼制', firstAppearChapter:'人界篇后期', notableUsage:'大衍诀配合的剑阵' },
  { id:'a-wulong', name:'乌龙夺', type:'飞剑', grade:'灵器', ownerId:H, ownerName:'韩立', description:'缴获的漆黑飞剑。', abilities:['灵动迅捷'], acquisition:'缴获所得', firstAppearChapter:'越国篇', notableUsage:'' },
  { id:'a-jinguang', name:'金光剑', type:'飞剑', grade:'灵器', ownerId:H, ownerName:'韩立', description:'通体金黄的飞剑。', abilities:['锋锐'], acquisition:'购得', firstAppearChapter:'人界篇中期', notableUsage:'' },
  { id:'a-qingming', name:'青冥针剑', type:'飞剑', grade:'灵器', ownerId:H, ownerName:'韩立', description:'细如银针的飞剑，擅偷袭穿透护体灵光。', abilities:['穿透','偷袭'], acquisition:'缴获', firstAppearChapter:'越国篇', notableUsage:'' },
  { id:'a-feixing', name:'飞星剑', type:'飞剑', grade:'法宝', ownerId:H, ownerName:'韩立', description:'剑光如流星划空，速度极快。', abilities:['极速'], acquisition:'购得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-xueying', name:'血影魔剑', type:'飞剑', grade:'古宝', ownerId:H, ownerName:'韩立', description:'魔道古宝飞剑，剑身缠绕血色魔影。', abilities:['血影斩','魔气侵蚀'], acquisition:'击杀魔修缴获', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-ziyan', name:'紫炎剑', type:'飞剑', grade:'法宝', ownerId:H, ownerName:'韩立', description:'附带紫色火焰的飞剑。', abilities:['紫焰灼烧'], acquisition:'购得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-fenglei', name:'风雷剑', type:'飞剑', grade:'法宝', ownerId:H, ownerName:'韩立', description:'兼具风雷双属性之力。', abilities:['风雷双属性'], acquisition:'自行炼制', firstAppearChapter:'人界篇后期', notableUsage:'' },
  { id:'a-tiana', name:'天阿神剑', type:'飞剑', grade:'古宝', ownerId:H, ownerName:'韩立', description:'上古流传下来的神剑古宝。', abilities:['天威剑气'], acquisition:'古修遗迹所得', firstAppearChapter:'人界篇后期', notableUsage:'' },
  { id:'a-taiyi', name:'太乙青光剑', type:'飞剑', grade:'古宝', ownerId:H, ownerName:'韩立', description:'蕴含太乙青光的古宝飞剑。', abilities:['太乙青光','辟邪'], acquisition:'古修遗迹所得', firstAppearChapter:'人界篇后期', notableUsage:'' },

  // ═══ 攻击法宝 ═══
  { id:'a-xutianding', name:'虚天鼎', type:'攻击法宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'见十大至宝。', abilities:['乾蓝冰焰','封印','炼丹'], acquisition:'虚天殿所得', firstAppearChapter:'虚天殿篇', notableUsage:'乱星海第一至宝' },
  { id:'a-yuanci', name:'元磁神山', type:'攻击法宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'见十大至宝。', abilities:['元磁神光','破尽五行'], acquisition:'星宫所得', firstAppearChapter:'乱星海篇', notableUsage:'剑阵之下第一利器' },
  { id:'a-balingchi', name:'八灵尺', type:'攻击法宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'见十大至宝。', abilities:['定身禁锢','八灵幻影'], acquisition:'昆吾山所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-pingshanyin', name:'平山印', type:'攻击法宝', grade:'古宝', ownerId:H, ownerName:'韩立', description:'一方古印，祭出可化作巨山镇压敌人。', abilities:['镇压','重击'], acquisition:'古修遗迹所得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-wanhunfan', name:'万魂幡', type:'攻击法宝', grade:'古宝', ownerId:H, ownerName:'韩立', description:'魔道至宝，幡中封印万魂，挥动间鬼哭神嚎。', abilities:['万魂齐出'], acquisition:'击杀魔修缴获', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-xuehunfan', name:'血魂幡', type:'攻击法宝', grade:'法宝', ownerId:H, ownerName:'韩立', description:'以血魂祭炼的魔幡。', abilities:['血魂攻击'], acquisition:'缴获', firstAppearChapter:'越国篇', notableUsage:'' },
  { id:'a-yinluofan', name:'阴罗幡', type:'攻击法宝', grade:'法宝', ownerId:H, ownerName:'韩立', description:'阴罗宗标志性法宝。', abilities:['阴煞之力'], acquisition:'缴获', firstAppearChapter:'越国篇', notableUsage:'' },
  { id:'a-heifengqi', name:'黑风旗', type:'攻击法宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'人界六大通天灵宝之一，与八灵尺共同镇压元刹圣祖分魂。', abilities:['黑风煞气'], acquisition:'昆吾山所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-hualingfu', name:'化灵符', type:'攻击法宝', grade:'灵器', ownerId:H, ownerName:'韩立', description:'激发后可化去敌人法宝上的灵力。', abilities:['化灵'], acquisition:'购得', firstAppearChapter:'人界篇中期', notableUsage:'' },
  { id:'a-jiuzhen', name:'九真伏魔环', type:'攻击法宝', grade:'古宝', ownerId:H, ownerName:'韩立', description:'九环相连，专克魔道。', abilities:['伏魔','困敌'], acquisition:'古修遗迹所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-qianlan', name:'乾蓝冰焰', type:'攻击法宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'至寒至烈的蓝色冰焰，可冻结万物乃至神魂。韩立最强攻击手段之一。', abilities:['极寒冰封','神魂冻结'], acquisition:'虚天鼎中所得', firstAppearChapter:'虚天殿篇', notableUsage:'' },
  { id:'a-bixie-shenlei', name:'辟邪神雷', type:'攻击法宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'金雷竹释放的淡金色神雷，专克魔功邪物，被称为"魔修克星"。可组成电网禁锢元婴、封锁五行灵气。', abilities:['辟邪','破魔','禁锢元婴','封锁灵气'], acquisition:'以金雷竹为引', firstAppearChapter:'乱星海篇', notableUsage:'魔修克星' },
  { id:'a-tianluo-zhenlei', name:'天罗真雷', type:'攻击法宝', grade:'古宝', ownerId:H, ownerName:'韩立', description:'天罗国秘传真雷法术。', abilities:['真雷之威'], acquisition:'天罗国所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-xiuluo', name:'修罗圣火', type:'攻击法宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'传说中修罗界圣火。', abilities:['焚天煮海'], acquisition:'大晋所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-miexianzhu', name:'灭仙珠', type:'攻击法宝', grade:'古宝', ownerId:H, ownerName:'韩立', description:'一次性消耗型古宝，威力足以威胁化神修士，韩立保命底牌之一。', abilities:['一击必杀'], acquisition:'古修遗迹所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-mosuizuan', name:'魔髓钻', type:'攻击法宝', grade:'法宝', ownerId:H, ownerName:'韩立', description:'魔道秘宝，形如钻头可钻破护体灵光。', abilities:['破防'], acquisition:'击杀魔修缴获', firstAppearChapter:'乱星海篇', notableUsage:'' },

  // ═══ 防御法器 ═══
  { id:'a-guilingdun', name:'龟灵盾', type:'防御法器', grade:'灵器', ownerId:H, ownerName:'韩立', description:'以龟妖之甲炼制的盾牌。', abilities:['物理防御'], acquisition:'击杀妖兽炼制', firstAppearChapter:'人界篇早期', notableUsage:'' },
  { id:'a-jingangzhao', name:'金刚罩', type:'防御法器', grade:'灵器', ownerId:H, ownerName:'韩立', description:'激发后化作金色光罩护住全身。', abilities:['全身防护'], acquisition:'购得', firstAppearChapter:'黄枫谷篇', notableUsage:'' },
  { id:'a-wufengjia', name:'乌凤甲', type:'防御法器', grade:'法宝', ownerId:H, ownerName:'韩立', description:'以乌凤翎羽炼制的战甲。', abilities:['物理法术双防'], acquisition:'自行炼制', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-jincansijia', name:'金蚕丝甲', type:'防御法器', grade:'法宝', ownerId:H, ownerName:'韩立', description:'韩立炼制的贴身内甲，轻若无物却坚韧无比，屡次保命。', abilities:['坚韧','贴身防护'], acquisition:'自行炼制', firstAppearChapter:'人界篇中期', notableUsage:'屡次绝境保命' },
  { id:'a-bamen-jinguangjing', name:'八门金光镜', type:'防御法器', grade:'法宝', ownerId:H, ownerName:'韩立', description:'八面金光镜组成的防御阵，可反射部分攻击。', abilities:['反射','全方位防御'], acquisition:'购得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-yuanci-guangzhao', name:'元磁神光罩', type:'防御法器', grade:'古宝', ownerId:H, ownerName:'韩立', description:'以元磁神光凝聚的防御罩，可扭曲金属法器。', abilities:['元磁护体'], acquisition:'乱星海所得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-tianlingdun', name:'天灵盾', type:'防御法器', grade:'古宝', ownerId:H, ownerName:'韩立', description:'上古天灵盾，可抵挡元婴期全力一击。', abilities:['强力防御'], acquisition:'古修遗迹所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-mojiao-linjia', name:'墨蛟鳞甲', type:'防御法器', grade:'法宝', ownerId:H, ownerName:'韩立', description:'以墨蛟之鳞炼制的护甲，带龙族威压。', abilities:['龙威'], acquisition:'击杀墨蛟炼制', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-wuxinghuan', name:'五行环', type:'防御法器', grade:'法宝', ownerId:H, ownerName:'韩立', description:'五行之力循环的防御环，克制大多数五行法术。', abilities:['五行循环','五行克制'], acquisition:'购得', firstAppearChapter:'大晋篇', notableUsage:'' },

  // ═══ 辅助法宝 ═══
  { id:'a-fengleichilei', name:'风雷翅', type:'辅助法宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'见十大至宝。', abilities:['雷遁','风遁','空间跳跃'], acquisition:'从风希手中抢夺', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-duntianche', name:'遁天车', type:'辅助法宝', grade:'法宝', ownerId:H, ownerName:'韩立', description:'飞行法宝，速度奇快。', abilities:['高速飞行'], acquisition:'购得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-pojinzhu', name:'破禁珠', type:'辅助法宝', grade:'灵器', ownerId:H, ownerName:'韩立', description:'可破除阵法禁制的宝珠。', abilities:['破解禁制'], acquisition:'购得', firstAppearChapter:'人界篇中期', notableUsage:'' },
  { id:'a-julingzhu', name:'聚灵珠', type:'辅助法宝', grade:'灵器', ownerId:H, ownerName:'韩立', description:'自行吸纳天地灵气存储，闭关修炼保障。', abilities:['灵气储蓄'], acquisition:'黄枫谷坊市购得', firstAppearChapter:'黄枫谷篇', notableUsage:'' },
  { id:'a-yirong-mianju', name:'易容面具', type:'辅助法宝', grade:'法器', ownerId:H, ownerName:'韩立', description:'可改变容貌的灵具，韩立常用。', abilities:['易容','隐匿身份'], acquisition:'购得', firstAppearChapter:'人界篇早期', notableUsage:'' },
  { id:'a-chuansong-zhenpan', name:'传送阵盘', type:'辅助法宝', grade:'古宝', ownerId:H, ownerName:'韩立', description:'可随身携带的小型传送阵盘，关键时刻传送脱身。', abilities:['传送脱身'], acquisition:'古修遗迹所得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-tianjifu', name:'天机府', type:'辅助法宝', grade:'古宝', ownerId:H, ownerName:'韩立', description:'可随身携带的洞府法宝，展开化作完整修炼府邸。', abilities:['移动洞府','修炼场所'], acquisition:'天机府所得', firstAppearChapter:'大晋篇', notableUsage:'' },

  // ═══ 灵兽/灵虫 ═══
  { id:'a-tihunshou', name:'啼魂兽', type:'灵兽/灵虫', grade:'古宝', ownerId:H, ownerName:'韩立',
    description:'介于灵兽与妖魂之间的奇特生灵。初为碧绿小猴形态，鼻子奇大几乎占面目一半。核心能力：天生吸魂啖鬼，鼻子喷出黄色"吸魂神光"，吞噬精魂、鬼物、尸气，对鬼道法术完全免疫。韩立从元瑶手中获得。进化后通体乌黑，背生血色鬼影图案。真实身份为幽冥界冥王转世。关键战绩：啃食大量阴冥兽魂进阶；吞噬苍猿妖魂；魔金山脉施展大吞灭术与天罚神矛。先于韩立飞升仙界。',
    abilities:['吸魂啖鬼','吸魂神光','克制神魂','冥王转世'], acquisition:'从元瑶手中获得', firstAppearChapter:'虚天殿篇', notableUsage:'吞噬鬼物妖魂，冥王转世' },
  { id:'a-shijinchong', name:'噬金虫', type:'灵兽/灵虫', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'见十大至宝。', abilities:['无物不噬','群攻'], acquisition:'小寰岛洞府发现', firstAppearChapter:'人界篇早期', notableUsage:'' },
  { id:'a-chengshu-shijin', name:'成熟体噬金虫', type:'灵兽/灵虫', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'噬金虫完全成熟形态，金色个体，威力堪比通天灵宝。', abilities:['吞噬万物'], acquisition:'噬金虫进化', firstAppearChapter:'人界篇后期', notableUsage:'' },
  { id:'a-sanse-shijin', name:'三色噬金虫', type:'灵兽/灵虫', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'以金雷竹竹叶喂养后异变的噬金虫，身具三色更为强大。', abilities:['三色之力','更强吞噬'], acquisition:'噬金虫变异', firstAppearChapter:'人界篇后期', notableUsage:'' },
  { id:'a-xueyu-zhizhu', name:'血玉蜘蛛', type:'灵兽/灵虫', grade:'灵器', ownerId:H, ownerName:'韩立', description:'通体血红的蜘蛛灵兽，吐出血玉蛛丝坚韧无比。', abilities:['血玉蛛丝','困敌'], acquisition:'乱星海所得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-mojiao', name:'墨蛟', type:'灵兽/灵虫', grade:'法宝', ownerId:H, ownerName:'韩立', description:'黑色蛟龙灵兽，拥有真龙血脉。', abilities:['龙族血脉'], acquisition:'乱星海收服', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-jinbei-yaolang', name:'金背妖螂', type:'灵兽/灵虫', grade:'灵器', ownerId:H, ownerName:'韩立', description:'金色背甲的螳螂状灵虫，擅隐匿偷袭。', abilities:['隐匿','偷袭'], acquisition:'越国灵山中驯养', firstAppearChapter:'人界篇早期', notableUsage:'' },
  { id:'a-xuechi-heiwen', name:'血翅黑蚊', type:'灵兽/灵虫', grade:'法宝', ownerId:H, ownerName:'韩立', description:'血翅黑蚊群，数量极多可遮天蔽日吸食精血。', abilities:['群攻','吸血'], acquisition:'收服', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-tiehuoyi', name:'铁火蚁', type:'灵兽/灵虫', grade:'灵器', ownerId:H, ownerName:'韩立', description:'身坚如铁喷吐火焰的蚁虫。噬金虫在虚天殿中以铁火蚁群为食一战成名。', abilities:['坚硬外壳','火焰攻击'], acquisition:'收服', firstAppearChapter:'乱星海篇', notableUsage:'' },

  // ═══ 丹药 ═══
  { id:'a-zhujidan', name:'筑基丹', type:'丹药', grade:'法器', ownerId:H, ownerName:'韩立',
    description:'练气圆满修士突破至筑基期的必备丹药，极为珍贵。韩立从血色禁地获得灵药后取得筑基丹资格，借此突破至筑基期，从此真正进入修仙界主流阶层。', abilities:['助破筑基'], acquisition:'血色禁地所得', firstAppearChapter:'黄枫谷篇', notableUsage:'韩立突破筑基的关键' },
  { id:'a-huayingdan', name:'化婴丹', type:'丹药', grade:'法宝', ownerId:H, ownerName:'韩立',
    description:'可助结丹圆满修士化丹成婴的逆天丹药，韩立结婴关键。', abilities:['助结元婴'], acquisition:'乱星海所得', firstAppearChapter:'乱星海篇', notableUsage:'韩立结婴关键' },
  { id:'a-butiandan', name:'补天丹', type:'丹药', grade:'古宝', ownerId:H, ownerName:'韩立',
    description:'虚天鼎中所得丹药，可改善修士灵根资质。韩立借此摆脱伪灵根宿命，是改变命运的逆天丹药。', abilities:['改善灵根','逆天改命'], acquisition:'虚天鼎中所得', firstAppearChapter:'虚天殿篇', notableUsage:'改变韩立灵根资质' },
  { id:'a-jiuqu-lingcan', name:'九曲灵参丹', type:'丹药', grade:'法宝', ownerId:H, ownerName:'韩立', description:'以九曲灵参为主药炼制的丹药，可大幅提升修为。', abilities:['大幅提升修为'], acquisition:'自行炼制', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-huanglongdan', name:'黄龙丹', type:'丹药', grade:'凡器', ownerId:H, ownerName:'韩立', description:'练气期常用丹药，增强体质稳固修为。', abilities:['增强体质'], acquisition:'购得/炼制', firstAppearChapter:'人界篇早期', notableUsage:'' },
  { id:'a-jinsuiwan', name:'金髓丸', type:'丹药', grade:'凡器', ownerId:H, ownerName:'韩立', description:'墨大夫炼制的改善体质丹药。', abilities:['改善体质'], acquisition:'墨大夫炼制', firstAppearChapter:'第1章', notableUsage:'韩立早期丹药' },
  { id:'a-bigudan', name:'辟谷丹', type:'丹药', grade:'凡器', ownerId:H, ownerName:'韩立', description:'服用后长时间不进食，闭关必备。', abilities:['辟谷'], acquisition:'购得', firstAppearChapter:'人界篇早期', notableUsage:'' },

  // ═══ 功法秘术 ═══
  { id:'a-changchungong', name:'长春功', type:'功法秘术', grade:'凡器', ownerId:H, ownerName:'韩立', description:'墨大夫传授的基础修仙功法，韩立修仙入门。', abilities:['基础修炼'], acquisition:'墨大夫传授', firstAppearChapter:'第1章', notableUsage:'' },
  { id:'a-qingyuan-jianjue', name:'青元剑诀', type:'功法秘术', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'上古青元子所创剑修功法，韩立主修功法之一，以剑入道威力无穷。', abilities:['剑修功法','青元剑气'], acquisition:'青元子传承', firstAppearChapter:'黄枫谷篇', notableUsage:'' },
  { id:'a-dayanjue', name:'大衍诀', type:'功法秘术', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'见十大至宝。', abilities:['神识倍增','分神术'], acquisition:'机缘所得+大衍神君传承', firstAppearChapter:'大衍诀篇', notableUsage:'' },
  { id:'a-mingwangjue', name:'明王诀', type:'功法秘术', grade:'古宝', ownerId:H, ownerName:'韩立', description:'佛门功法，可增强肉身强度，解决梵圣真魔功煞气反噬问题。', abilities:['肉身强化','佛门护体','克制煞气'], acquisition:'机缘所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-fansheng-zhenmogong', name:'梵圣真魔功', type:'功法秘术', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'见十大至宝。', abilities:['法相金身','涅槃三变'], acquisition:'大晋昆吾山所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-baimai-lianbaojue', name:'百脉炼宝诀', type:'功法秘术', grade:'古宝', ownerId:H, ownerName:'韩立', description:'以全身经脉炼化法宝的功法。', abilities:['经脉炼宝'], acquisition:'机缘所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-sanzhuan-chongyuan', name:'三转重元功', type:'功法秘术', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'韩立主修功法之一，真元压缩凝聚，法力远超同阶。', abilities:['真元压缩','法力倍增'], acquisition:'青元子传承', firstAppearChapter:'青元传承篇', notableUsage:'' },
  { id:'a-tuotian-mogong', name:'托天魔功', type:'功法秘术', grade:'古宝', ownerId:H, ownerName:'韩立', description:'魔道炼体秘术，以防御力著称，融入梵圣真魔功体系。', abilities:['魔道防御','炼体'], acquisition:'缴获', firstAppearChapter:'越国篇', notableUsage:'' },

  // ═══ 灵材 ═══
  { id:'a-jinleizhu', name:'金雷竹', type:'灵材', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'见十大至宝。', abilities:['天雷之力','辟邪神雷'], acquisition:'紫灵处获残段+绿液催熟', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-tianleizhu', name:'天雷竹', type:'灵材', grade:'古宝', ownerId:H, ownerName:'韩立', description:'金雷竹的前身形态，数千年份可释放蓝色雷电。', abilities:['蓝雷之力'], acquisition:'紫灵处获得', firstAppearChapter:'人界篇中期', notableUsage:'' },
  { id:'a-yanghunmu', name:'养魂木', type:'灵材', grade:'古宝', ownerId:H, ownerName:'韩立', description:'可滋养神魂的灵木，对神识功法修炼极有用。', abilities:['滋养神魂'], acquisition:'机缘所得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-wannian-lingru-m', name:'万年灵乳', type:'灵材', grade:'古宝', ownerId:H, ownerName:'韩立', description:'极为罕见的天地灵物，一滴便可大幅提升修为。韩立与南宫婉在虚天殿因争夺万年灵乳结识，此物成为两人缘分开端。', abilities:['大幅提升修为'], acquisition:'虚天殿所得', firstAppearChapter:'虚天殿篇', notableUsage:'韩立南宫婉结缘之物' },
  { id:'a-gengjing', name:'庚精', type:'灵材', grade:'古宝', ownerId:H, ownerName:'韩立', description:'庚金属性至纯至坚的炼器材料。韩立将庚精融入青竹蜂云剑后，飞剑威力大增，可释放无坚不摧的大庚剑阵剑丝。', abilities:['至坚','庚金属性','剑阵升级'], acquisition:'从至阳上人/魏无涯/吕洛处所得', firstAppearChapter:'乱星海篇', notableUsage:'大庚剑阵核心材料' },
  { id:'a-xingchensha', name:'星辰砂', type:'灵材', grade:'古宝', ownerId:H, ownerName:'韩立', description:'蕴含星辰之力的砂粒，炼制高级阵法和法宝的上品材料。', abilities:['星辰之力'], acquisition:'秘境所得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-jiuqu-lingshen', name:'九曲灵参', type:'灵材', grade:'古宝', ownerId:H, ownerName:'韩立', description:'人形灵药，极其珍稀，可炼制九曲灵参丹大幅提升修为。', abilities:['人形灵药','顶级药力'], acquisition:'秘境所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-hualongcao', name:'化龙草', type:'灵材', grade:'古宝', ownerId:H, ownerName:'韩立', description:'可助蛟龙化龙的灵草，蕴含真龙之力。', abilities:['化龙之力'], acquisition:'秘境所得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-niming-shenru', name:'冥河神乳', type:'灵材', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'传说中冥河之中诞生的神乳，可大幅提升修为。', abilities:['大幅提升修为'], acquisition:'机缘所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-qianlan-bingyan-benyuan', name:'乾蓝冰焰本源', type:'灵材', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'乾蓝冰焰的本源之火，炼化后可彻底掌控冰焰。', abilities:['冰焰本源'], acquisition:'虚天鼎中所得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-lvye', name:'绿液', type:'灵材', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'掌天瓶吸收月光凝聚的绿色液体，可大幅加速灵药生长催熟。韩立修炼突破的核心外挂。', abilities:['催熟灵药','加速生长'], acquisition:'掌天瓶凝聚', firstAppearChapter:'第1章', notableUsage:'韩立最大机缘的核心' },

  // ═══ 符箓 ═══
  { id:'a-wanli-dunfu', name:'万里遁符', type:'符箓', grade:'法宝', ownerId:H, ownerName:'韩立', description:'可让人瞬间遁出万里的超级符箓，韩立保命底牌之一。', abilities:['万里遁逃'], acquisition:'机缘所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-pojiefu', name:'破界符', type:'符箓', grade:'古宝', ownerId:H, ownerName:'韩立', description:'可破开界面的符箓，对飞升灵界至关重要。', abilities:['破界','飞升'], acquisition:'机缘所得', firstAppearChapter:'人界篇末', notableUsage:'' },
  { id:'a-liuding-tianjiafu', name:'六丁天甲符', type:'符箓', grade:'古宝', ownerId:H, ownerName:'韩立', description:'六丁天甲护体的强大防御符箓。', abilities:['六丁护体'], acquisition:'大晋所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-jingangfu', name:'金刚符', type:'符箓', grade:'法器', ownerId:H, ownerName:'韩立', description:'激发后全身坚如金刚的防御符箓。', abilities:['金刚护体'], acquisition:'购得', firstAppearChapter:'人界篇早期', notableUsage:'' },
  { id:'a-yinshenfu', name:'隐身符', type:'符箓', grade:'法器', ownerId:H, ownerName:'韩立', description:'可让使用者隐身的符箓。', abilities:['隐身'], acquisition:'购得', firstAppearChapter:'人界篇早期', notableUsage:'' },

  // ═══ 阵法 ═══
  { id:'a-diandao-wuxing', name:'颠倒五行阵', type:'阵法', grade:'法宝', ownerId:H, ownerName:'韩立', description:'颠倒五行之力的阵法，入阵者五行紊乱方向迷失。韩立常用困敌手段。', abilities:['五行颠倒','困阵迷阵'], acquisition:'自行研习', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-qingyuan-jianzhen', name:'青元剑阵', type:'阵法', grade:'法宝', ownerId:H, ownerName:'韩立', description:'以青元剑诀为基的剑阵，韩立标志性阵法。配合大庚剑阵威力无穷。', abilities:['青元剑气','剑阵'], acquisition:'自行研习', firstAppearChapter:'人界篇中期', notableUsage:'' },
  { id:'a-tiangang-fumo', name:'天罡伏魔阵', type:'阵法', grade:'古宝', ownerId:H, ownerName:'韩立', description:'天罡之力布下的伏魔大阵，克制一切魔修。', abilities:['天罡之力','伏魔'], acquisition:'古修遗迹所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-jiulong-suotian', name:'九龙锁天阵', type:'阵法', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'以九龙之力封锁天地的超级阵法，人界最强阵法之一。', abilities:['九龙封锁'], acquisition:'大晋所得', firstAppearChapter:'大晋篇', notableUsage:'' },

  // ═══ 傀儡 ═══
  { id:'a-tianji-kuilei', name:'天机傀儡', type:'傀儡', grade:'法宝', ownerId:H, ownerName:'韩立', description:'天机府炼制的高级战斗傀儡，实力堪比元婴修士。', abilities:['高级战斗'], acquisition:'天机府所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-shanggu-kuilei', name:'上古傀儡', type:'傀儡', grade:'古宝', ownerId:H, ownerName:'韩立', description:'上古流传下来的傀儡，实力深不可测。', abilities:['上古之力'], acquisition:'古修遗迹所得', firstAppearChapter:'大晋篇', notableUsage:'' },

  // ═══ 火焰/神雷 ═══
  { id:'a-bixie-shenlei2', name:'辟邪神雷', type:'火焰/神雷', grade:'通天灵宝', ownerId:H, ownerName:'韩立',
    description:'见十大至宝中金雷竹与辟邪神雷条目。本质为金雷竹释放的淡金色神雷，在灵界被称为至木神雷或乙木正雷，属五行极致神雷之一。专克魔功邪物，可组成电网禁锢元婴、封锁五行灵气。五大妙用：攻击魔修、禁锢元婴、封锁灵气、驱动风雷翅施展雷遁术、修习祭雷术远程传送。韩立72柄飞剑等于72个"充电口"，且有小绿瓶快速补充能量。', abilities:['辟邪破魔','禁锢元婴','封锁灵气','雷遁驱动'], acquisition:'以金雷竹为引', firstAppearChapter:'乱星海篇', notableUsage:'魔修克星' },
  { id:'a-qianlan-bingyan2', name:'乾蓝冰焰', type:'火焰/神雷', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'至寒至烈的蓝色冰焰，可冻结神魂。来自虚天鼎。', abilities:['极寒','神魂冻结'], acquisition:'虚天鼎中所得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-xiuluo-shenghuo2', name:'修罗圣火', type:'火焰/神雷', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'修罗界圣火，焚山煮海。', abilities:['焚天煮海'], acquisition:'大晋所得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-ziluo-jihuo', name:'紫罗极火', type:'火焰/神雷', grade:'古宝', ownerId:H, ownerName:'韩立', description:'紫色极火，温度之高可焚毁万物。', abilities:['极热'], acquisition:'秘境所得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-nanming-lihuo', name:'南明离火', type:'火焰/神雷', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'传说中万火之精，南明火德星君离火。', abilities:['万火之精'], acquisition:'机缘所得', firstAppearChapter:'大晋篇', notableUsage:'' },

  // ═══ 补充：攻击法宝 ═══
  { id:'a-chihunfan', name:'赤魂幡', type:'攻击法宝', grade:'法宝', ownerId:H, ownerName:'韩立', description:'以魂魄炼制的魔道法宝，阴毒异常。韩立对这类法宝一向极为厌恶。', abilities:['赤魂攻击'], acquisition:'缴获', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-wuzi-tongxinmo', name:'五子同心魔', type:'攻击法宝', grade:'古宝', ownerId:H, ownerName:'韩立', description:'古魔秘术之一，带有强烈精神压迫。韩立在坠魔谷事件中见识到此类魔功的危险。', abilities:['精神压迫','同心合击'], acquisition:'缴获', firstAppearChapter:'坠魔谷篇', notableUsage:'' },
  { id:'a-tianjifu-kuilei', name:'天机府傀儡', type:'攻击法宝', grade:'古宝', ownerId:H, ownerName:'韩立', description:'天机府中的上古傀儡，拥有远超普通修士的战力。韩立后来逐渐研究傀儡术并从中获益。', abilities:['上古战力','自主作战'], acquisition:'天机府所得', firstAppearChapter:'大晋篇', notableUsage:'' },

  // ═══ 补充：防御法器 ═══
  { id:'a-qingluosan', name:'青罗伞', type:'防御法器', grade:'灵器', ownerId:H, ownerName:'韩立', description:'兼具防御与遮蔽功能的法器，常用于抵御飞剑攻击。', abilities:['法术防御'], acquisition:'购得', firstAppearChapter:'越国篇', notableUsage:'' },
  { id:'a-huangluosan', name:'黄罗伞', type:'防御法器', grade:'灵器', ownerId:H, ownerName:'韩立', description:'较为经典的防御法器，能够抵挡法术轰击。', abilities:['法术减免'], acquisition:'购得', firstAppearChapter:'越国篇', notableUsage:'' },
  { id:'a-baigudun', name:'白骨盾', type:'防御法器', grade:'灵器', ownerId:H, ownerName:'韩立', description:'魔道风格明显的防御法器，阴气极重。', abilities:['阴煞护体'], acquisition:'缴获', firstAppearChapter:'越国篇', notableUsage:'' },
  { id:'a-chiyandun', name:'赤炎盾', type:'防御法器', grade:'法宝', ownerId:H, ownerName:'韩立', description:'火属性防御法器，可抵挡寒冰类神通。', abilities:['火焰反伤'], acquisition:'购得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-xingyuejia', name:'星月甲', type:'防御法器', grade:'法宝', ownerId:H, ownerName:'韩立', description:'兼具轻灵与防御效果的护甲类法宝。', abilities:['星月之力'], acquisition:'购得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-jinxiazhao', name:'金霞罩', type:'防御法器', grade:'灵器', ownerId:H, ownerName:'韩立', description:'能够释放金霞护体，在正道修士中较为常见。', abilities:['金光护体'], acquisition:'购得', firstAppearChapter:'黄枫谷篇', notableUsage:'' },

  // ═══ 补充：储物法器 ═══
  { id:'a-chuwudai', name:'储物袋', type:'储物法器', grade:'凡器', ownerId:H, ownerName:'韩立', description:'修仙界最基础的空间法器，几乎所有修士都会携带。韩立通过储物袋积累了最初的资源。', abilities:['收纳物品'], acquisition:'早期获得', firstAppearChapter:'第1章', notableUsage:'' },
  { id:'a-xumidai', name:'须弥袋', type:'储物法器', grade:'灵器', ownerId:H, ownerName:'韩立', description:'拥有更大空间的高级储物法器，涉及空间神通。', abilities:['须弥空间'], acquisition:'缴获', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-fenglingxia', name:'封灵匣', type:'储物法器', grade:'灵器', ownerId:H, ownerName:'韩立', description:'专门封存特殊灵物与危险法宝的器具。', abilities:['封印灵物'], acquisition:'购得', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-kuilei-cangxiang', name:'傀儡储物箱', type:'储物法器', grade:'灵器', ownerId:H, ownerName:'韩立', description:'用于存放机关傀儡的大型空间器具。', abilities:['收纳傀儡'], acquisition:'购得', firstAppearChapter:'大晋篇', notableUsage:'' },

  // ═══ 补充：辅助法宝 ═══
  { id:'a-celingpan', name:'测灵盘', type:'辅助法宝', grade:'法器', ownerId:H, ownerName:'韩立', description:'用于测试灵力与资质的法器，修仙宗门经常使用。', abilities:['探测灵气'], acquisition:'购得', firstAppearChapter:'人界篇早期', notableUsage:'' },
  { id:'a-dingxingpan', name:'定星盘', type:'辅助法宝', grade:'灵器', ownerId:H, ownerName:'韩立', description:'涉及星象与空间定位的罗盘，在远距离传送中作用重要。', abilities:['星空定位','航海导航'], acquisition:'购得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-luopan-faqi', name:'罗盘法器', type:'辅助法宝', grade:'法器', ownerId:H, ownerName:'韩立', description:'用于寻找方向、禁制与灵脉的基础法器。', abilities:['方向指示','探测禁制'], acquisition:'购得', firstAppearChapter:'人界篇早期', notableUsage:'' },
  { id:'a-chuanyinfu', name:'传音符', type:'辅助法宝', grade:'凡器', ownerId:H, ownerName:'韩立', description:'修士之间远距离通讯的重要手段。', abilities:['远距离传音'], acquisition:'购得', firstAppearChapter:'人界篇早期', notableUsage:'' },
  { id:'a-wanlifu', name:'万里符', type:'辅助法宝', grade:'灵器', ownerId:H, ownerName:'韩立', description:'可进行长距离信息传递或遁逃。', abilities:['万里传音'], acquisition:'购得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-yinlingsha', name:'隐灵纱', type:'辅助法宝', grade:'灵器', ownerId:H, ownerName:'韩立', description:'能够隐藏气息的特殊法器，非常符合韩立低调谨慎的行事风格。', abilities:['隐匿灵力','避敌'], acquisition:'购得', firstAppearChapter:'人界篇中期', notableUsage:'' },
  { id:'a-dundifu', name:'遁地符', type:'辅助法宝', grade:'法器', ownerId:H, ownerName:'韩立', description:'低阶修士常用保命符箓，可短暂遁入地下。', abilities:['遁地'], acquisition:'购得', firstAppearChapter:'人界篇中期', notableUsage:'' },
  { id:'a-feitianfu', name:'飞天符', type:'辅助法宝', grade:'法器', ownerId:H, ownerName:'韩立', description:'增加飞行速度的辅助符箓。', abilities:['短暂飞行'], acquisition:'购得', firstAppearChapter:'人界篇早期', notableUsage:'' },
  { id:'a-xuanyutai', name:'玄玉台', type:'辅助法宝', grade:'灵器', ownerId:H, ownerName:'韩立', description:'涉及空间传送的重要器具，在大型秘境中较常出现。', abilities:['辅助传送','空间锚定'], acquisition:'购得', firstAppearChapter:'黄枫谷篇', notableUsage:'' },
  { id:'a-lingjie-ditu', name:'灵界地图玉简', type:'辅助法宝', grade:'古宝', ownerId:H, ownerName:'韩立', description:'记录灵界信息的重要玉简，为韩立飞升灵界后做准备。', abilities:['地图信息','灵界知识'], acquisition:'机缘所得', firstAppearChapter:'人界篇末', notableUsage:'' },
  { id:'a-taiyi-huaqingfu', name:'太一化清符', type:'辅助法宝', grade:'通天灵宝', ownerId:H, ownerName:'韩立', description:'顶级保命符箓之一，价值极高。人界篇最强的辅助符箓，可化一切污秽恢复清明。', abilities:['化清','净化','保命'], acquisition:'大晋所得', firstAppearChapter:'大晋篇', notableUsage:'' },

  // ═══ 补充：灵兽/灵虫 ═══
  { id:'a-jinyuan', name:'金猿', type:'灵兽/灵虫', grade:'灵器', ownerId:H, ownerName:'韩立', description:'力量型灵兽，偏重近战。', abilities:['巨力','近战'], acquisition:'购得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-huochanshou', name:'火蟾兽', type:'灵兽/灵虫', grade:'灵器', ownerId:H, ownerName:'韩立', description:'拥有火属性神通的妖兽。', abilities:['喷火','火属性攻击'], acquisition:'购得', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-jiuyaogui', name:'九级妖龟', type:'灵兽/灵虫', grade:'法宝', ownerId:H, ownerName:'韩立', description:'高阶海域妖兽，防御力惊人。', abilities:['超强防御','长寿'], acquisition:'乱星海收服', firstAppearChapter:'乱星海篇', notableUsage:'' },
  { id:'a-bingyao', name:'冰妖', type:'灵兽/灵虫', grade:'灵器', ownerId:H, ownerName:'韩立', description:'冰属性妖物，常见于极寒之地。', abilities:['寒气','冰封'], acquisition:'收服', firstAppearChapter:'人界篇中期', notableUsage:'' },
  { id:'a-suannis', name:'狻猊兽', type:'灵兽/灵虫', grade:'法宝', ownerId:H, ownerName:'韩立', description:'带有上古神兽血脉的灵兽。', abilities:['龙族血脉','威压'], acquisition:'收服', firstAppearChapter:'大晋篇', notableUsage:'' },
  { id:'a-feitian-ziwenxie', name:'飞天紫纹蝎', type:'灵兽/灵虫', grade:'灵器', ownerId:H, ownerName:'韩立', description:'剧毒妖虫，适合偷袭。', abilities:['飞行','毒刺','麻痹'], acquisition:'购得', firstAppearChapter:'乱星海篇', notableUsage:'' },
];
