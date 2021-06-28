import Rank from './components/rank/Rank'
import Recommend from './components/recommend/Recommend'
import Search from './components/search/Search'
import Singer from './components/singer/Singer'
import SingerDetail from './components/singer-detail/Singerdetail'

export const routes = [
  {path: '/', redirect: '/recommend'},
  {path: '/rank', component: Rank},
  {path: '/recommend', component: Recommend},
  {path: '/search', component: Search},
  {path: '/Singer', component: Singer, children: [
      {path: ":id", component: SingerDetail}
    ]
  },
]
