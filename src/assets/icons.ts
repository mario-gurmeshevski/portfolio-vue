import type { App } from 'vue'
import { Fa6LocationDot, Fa6Server, Fa6Envelope } from 'vue-icons-plus/fa6'
import { HiMiniWrenchScrewdriver, HiXMark } from 'vue-icons-plus/hi2'
import { PiBrowsersFill } from 'vue-icons-plus/pi'
import {
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiAngular,
  SiLinkedin,
} from 'vue-icons-plus/si'

export default {
  install(app: App) {
    app.component('SiPython', SiPython)
    app.component('SiJavascript', SiJavascript)
    app.component('SiTypescript', SiTypescript)
    app.component('SiCplusplus', SiCplusplus)
    app.component('SiCsharp', SiCsharp)
    app.component('SiPostgresql', SiPostgresql)
    app.component('SiFirebase', SiFirebase)
    app.component('SiMongodb', SiMongodb)
    app.component('SiNestjs', SiNestjs)
    app.component('SiReact', SiReact)
    app.component('SiAngular', SiAngular)
    app.component('SiTailwindcss', SiTailwindcss)
    app.component('SiGithub', SiGithub)
    app.component('SiGit', SiGit)
    app.component('SiVisualstudiocode', SiVisualstudiocode)
    app.component('SiHtml5', SiHtml5)
    app.component('SiCss3', SiCss3)
    app.component('SiNodedotjs', SiNodedotjs)
    app.component('SiLinkedin', SiLinkedin)
    app.component('HiMiniWrenchScrewdriver', HiMiniWrenchScrewdriver)
    app.component('PiBrowsersFill', PiBrowsersFill)
    app.component('Fa6Server', Fa6Server)
    app.component('Fa6Envelope', Fa6Envelope)
    app.component('Fa6LocationDot', Fa6LocationDot)
    app.component('HiXMark', HiXMark)
  },
}
