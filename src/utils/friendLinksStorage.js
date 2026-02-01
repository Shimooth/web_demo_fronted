/** 友情链接 localStorage 键名 */
export const FRIEND_LINKS_KEY = 'friendLinks';

/** 默认友情链接数据（照抄南京工业大学国家大学科技园 https://sp.njtech.edu.cn/index.htm） */
export function getDefaultFriendLinks() {
  const govLinks = [
    { id: 1, name: '中华人民共和国中央人民政府', url: 'https://www.gov.cn/' },
    { id: 2, name: '中华人民共和国科学技术部', url: 'https://www.most.gov.cn/' },
    { id: 3, name: '中华人民共和国教育部', url: 'https://www.moe.gov.cn/' },
    { id: 4, name: '中华人民共和国工业和信息化部', url: 'https://www.miit.gov.cn/' },
    { id: 5, name: '中华人民共和国人力资源和社会保障部', url: 'https://www.mohrss.gov.cn/' },
    { id: 6, name: '中华人民共和国国家发展和改革委员会', url: 'https://www.ndrc.gov.cn/' },
    { id: 7, name: '科技部火炬中心', url: 'https://www.chinatorch.gov.cn/' },
    { id: 8, name: '教育部科学技术司', url: 'https://www.moe.gov.cn/s78/A16/' },
    { id: 9, name: '教育部科技发展中心', url: 'https://www.cutech.edu.cn/' },
    { id: 10, name: '教育部科学技术委员会', url: 'https://www.moe.gov.cn/s78/A16/' },
    { id: 11, name: '江苏省人民政府', url: 'https://www.jiangsu.gov.cn/' },
    { id: 12, name: '江苏省科技厅', url: 'https://kxjst.jiangsu.gov.cn/' },
    { id: 13, name: '江苏省发展和改革委员会', url: 'https://fzggw.jiangsu.gov.cn/' },
    { id: 14, name: '江苏省工业和信息化厅', url: 'https://gxt.jiangsu.gov.cn/' },
    { id: 15, name: '江苏省教育厅', url: 'https://jyt.jiangsu.gov.cn/' },
    { id: 16, name: '江苏省人力资源和社会保障厅', url: 'https://jshrss.jiangsu.gov.cn/' },
    { id: 17, name: '南京市人民政府', url: 'https://www.nanjing.gov.cn/' },
    { id: 18, name: '南京市科学技术局', url: 'https://kjxjj.nanjing.gov.cn/' },
    { id: 19, name: '南京市发展和改革委员会', url: 'https://fgw.nanjing.gov.cn/' },
    { id: 20, name: '南京市工业和信息化局', url: 'https://gxj.nanjing.gov.cn/' },
    { id: 21, name: '南京市人力资源和社会保障局', url: 'https://rsj.nanjing.gov.cn/' },
  ];

  const parkLinks = [
    { id: 1, name: '清华大学科技园', url: 'https://www.tuspark.com/' },
    { id: 2, name: '北京大学科技园', url: 'https://www.pkusp.com/' },
    { id: 3, name: '北京化工大学科技园', url: 'https://www.buct.edu.cn/' },
    { id: 4, name: '复旦大学科技园', url: 'https://www.fudanusp.com/' },
    { id: 5, name: '同济大学科技园', url: 'https://www.tjusp.com/' },
    { id: 6, name: '上海理工大学科技园', url: 'https://www.usst.edu.cn/' },
    { id: 7, name: '上海交通大学科技园', url: 'https://www.sjtu.edu.cn/' },
    { id: 8, name: '中山大学科技园', url: 'https://www.zsu.edu.cn/' },
    { id: 9, name: '浙江省国家大学科技园', url: 'https://www.zjusp.com/' },
    { id: 10, name: '浙江大学科技园', url: 'https://www.zjusp.com/' },
    { id: 11, name: '东南大学科技园', url: 'https://sp.seu.edu.cn/' },
    { id: 12, name: '南京理工大学科技园', url: 'https://www.njust.edu.cn/' },
    { id: 13, name: '江南大学科技园', url: 'https://www.jiangnan.edu.cn/' },
    { id: 14, name: '中国矿业大学科技园', url: 'https://www.cumt.edu.cn/' },
    { id: 15, name: '东北大学国家大学科技园', url: 'https://www.neu.edu.cn/' },
    { id: 16, name: '哈尔滨工业大学国家大学科技园', url: 'https://www.hit.edu.cn/' },
    { id: 17, name: '哈尔滨工程大学国家大学科技园', url: 'https://www.hrbeu.edu.cn/' },
    { id: 18, name: '河南省国家大学科技园', url: 'https://www.haust.edu.cn/' },
    { id: 19, name: '华中科技大学科技园', url: 'https://www.hust.edu.cn/' },
    { id: 20, name: '武汉大学科技园', url: 'https://www.whu.edu.cn/' },
  ];

  const schoolLinks = [
    { id: 1, name: '南京工业大学', url: 'https://www.njtech.edu.cn/' },
    { id: 2, name: '研究生院', url: 'https://gra.njtech.edu.cn/' },
    { id: 3, name: '教学事务部', url: 'https://jwb.njtech.edu.cn/' },
    { id: 4, name: '科学研究部', url: 'https://kyb.njtech.edu.cn/' },
    { id: 5, name: '团委', url: 'https://tw.njtech.edu.cn/' },
    { id: 6, name: '资产经营公司', url: 'https://zcc.njtech.edu.cn/' },
    { id: 7, name: '图书馆', url: 'https://lib.njtech.edu.cn/' },
    { id: 8, name: '江苏先进生物与化学制造协同创新中心', url: 'https://cicab.njtech.edu.cn/' },
    { id: 9, name: '材料化学工程国家重点实验室', url: 'https://sklmce.njtech.edu.cn/' },
    { id: 10, name: '国家生化工程技术研究中心', url: 'https://www.njtech.edu.cn/' },
    { id: 11, name: '生物与制药工程学院', url: 'https://sgy.njtech.edu.cn/' },
    { id: 12, name: '机械与动力工程学院', url: 'https://jxy.njtech.edu.cn/' },
    { id: 13, name: '环境学院', url: 'https://hjxy.njtech.edu.cn/' },
    { id: 14, name: '材料科学与工程学院', url: 'https://clxy.njtech.edu.cn/' },
  ];

  const otherLinks = [
    { id: 1, name: '中国生产力促进中心协会', url: 'https://www.cppc.org.cn/' },
    { id: 2, name: '全国大学生创新创业实践联盟', url: 'https://www.eol.cn/' },
    { id: 3, name: '江苏省技术产权交易市场', url: 'https://www.jstec.com.cn/' },
    { id: 4, name: '江苏省生产力促进中心', url: 'https://www.jspc.org.cn/' },
  ];

  return {
    categories: [
      { id: 1, name: '政府部门', order: 1, links: govLinks },
      { id: 2, name: '其他大学科技园区', order: 2, links: parkLinks },
      { id: 3, name: '学校及相关部门', order: 3, links: schoolLinks },
      { id: 4, name: '其他链接', order: 4, links: otherLinks },
    ],
  };
}

/** 从 localStorage 读取友情链接，无则返回默认 */
export function loadFriendLinks() {
  try {
    const raw = localStorage.getItem(FRIEND_LINKS_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data && Array.isArray(data.categories)) return data;
    }
  } catch (_) {}
  return getDefaultFriendLinks();
}

/** 保存友情链接到 localStorage */
export function saveFriendLinks(data) {
  try {
    localStorage.setItem(FRIEND_LINKS_KEY, JSON.stringify(data));
    return true;
  } catch (_) {
    return false;
  }
}
