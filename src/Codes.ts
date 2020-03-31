import * as code from "./CodeStrings";

export interface Sample {
  technology: String,
  file: String,
  code: String,
}

export const Samples: Sample[] = [
  {
    technology: 'Scala&Akka',
    file: 'github.com:akka-tcp-ip/FrameHandler.scala',
    code: code.ScalaFrameHandler
  },
  {
    technology: 'TypeScript&React',
    file: 'github.com:psych-help/Background.tsx',
    code: code.ReactBackground
  },
  {
    technology: "Java&Spring",
    file: "uh-spring-tools/saml.java",
    code: code.SAMLConf
  },
  {
    technology: 'TypeScript&WebGL',
    file: 'github.com:pretty-things/Dandelion.ts',
    code: code.WebGL
  },
  {
    technology: 'Java&OpenGL',
    file: 'github.com:warp-engine/Tesselator.java',
    code: code.OpenGL
  },
  {
    technology: 'Java&Bytecode',
    file: 'github.com:warp-engine/IdMethodGenerator.java',
    code: code.JavaASM
  },


]