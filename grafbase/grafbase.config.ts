import { g, auth, config } from '@grafbase/sdk'

// Xây dựng schema User có tên là User và các thuộc tính thuộc nó được chứa trong {}
const User = g.model('User',{
  name: g.string().length({min: 2, max: 20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(), // Hiểu đơn giản là 1 User có thể có nhiều Project
})

const Project = g.model('Project',{
  title: g.string().length({min: 3, max: 20}),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createBy: g.relation(() => User),
})



export default config({
  schema: g
  // Integrate Auth
  // https://grafbase.com/docs/auth
  // auth: {
  //   providers: [authProvider],
  //   rules: (rules) => {
  //     rules.private()
  //   }
  // }
})
