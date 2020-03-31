
export const ScalaFrameHandler = `class FrameHandler extends Actor {
  val arpHandler = context.actorOf(Props(new ARPService))
  val ipv4Handler = context.actorOf(Props(new IPv4Service))
  override def receive = {
    case frame: IncomingFrame =>
      handleFrame(frame)
  }
  def handleFrame(frame: IncomingFrame): Unit = {
    (frame.frame.ethType match {
      case 0x0806 => arpHandler case 0x0800 => ipv4Handler }) ! frame
  }
}
object FrameHandler {

  case class IncomingFrame(frame: EthernetPacket)
}
class FrameHandler extends Actor {
  val arpHandler = context.actorOf(Props(new ARPService))


`

export const ReactBackground = `
export const Background = () => {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  const duration = 70
  const springsStart: any = useSprings(rainbow.length, 
    rainbow.map(({id, color}) => ({
    from: {scale: 0}, to: {scale: 1}, delay: id * duration,
  })))
  const springMiddle = useSpring({
    from: {scale: 0},scale: 1, delay: rainbow.length * duration,
  })
  const stripWidth = 0.03
  const positions: number[] = partialSums(rainbow.map(p => stripWidth))
  return (
    <div className="background">
      {rainbow.map(({id, color}) => (
          <animated.div className="bcTile" key={id} style={{
            left: dimensions.width * positions[id] - dimensions.height,
            width: dimensions.width * stripWidth,
            top: -dimensions.height,
            position: "fixed",
            bottom: 0,
            backgroundColor: color,
            transform: springsStart[id].scale.interpolate(
              (s: number) => skewX(45deg) scaleY(s)),
          }}></animated.div>
        )
`

export const ScalaMacro = `
type UpperCaseString <: String
implicit val UpperCaseString = 
  Definition[String, UpperCaseString](_.forall(_.isUpper))
type FirstHuman <: String
implicit val FirstHuman = OneOf[String, FirstHuman]("adam", "Eve"
def convertToSubset_impl[T : c.WeakTypeTag, R : c.WeakTypeTag]
  (c: Context)(i: c.Expr[T]): c.Expr[R] = {
  import c.universe._
  implicit val cc: c.type = c
  val subsetTypeTag = implicitly[c.WeakTypeTag[R]]
  val supersetTypeTag = implicitly[c.WeakTypeTag[T]]
  val x = c.inferImplicitValue(weakTypeOf[SubsetCondition[T,R]])
  if(x.isEmpty) {
    c.abort(c.enclosingPosition, s"Cannot convert...")
  }
  val y = c.eval(c.Expr[SubsetCondition[T,R]](c.untypecheck(x)))
  val expr = i.tree match {
    case Literal(Constant(v: T)) =>
      if(y != null) {
        if(y.condition(v)) {
          reify(c.Expr[T](i.tree).splice.asInstanceOf[R])
        } else {
          c.abort(c.enclosingPosition, s"Value \${v}")
        }
      } else {
        c.abort(c.enclosingPosition, s"Cannot convert from \${supersetTypeTag.tpe.typeSymbol}.")
      }
    case d => 
      c.abort(c.enclosingPosition, 
        s"Cannot perform conversion from \${supersetTypeTag.tpe.typeSymbol}"
      )
  }
  expr
}
`

export const SAMLConf = `@Bean
public SecurityContextLogoutHandler logoutHandler() {
    SecurityContextLogoutHandler logoutHandler =
            new SecurityContextLogoutHandler();
    logoutHandler.setInvalidateHttpSession(true);
    logoutHandler.setClearAuthentication(true);
    return logoutHandler;
}
@Bean
public SAMLLogoutFilter samlLogoutFilter(
        SecurityContextLogoutHandler securityContextLogoutHandler,
        SimpleUrlLogoutSuccessHandler simpleUrlLogoutSuccessHandler) {
    return new SAMLLogoutFilter(simpleUrlLogoutSuccessHandler,
            new LogoutHandler[]{securityContextLogoutHandler},
            new LogoutHandler[]{securityContextLogoutHandler});
}
@Bean
public SAMLLogoutProcessingFilter samlLogoutProcessingFilter(
        SecurityContextLogoutHandler securityContextLogoutHandler,
        SimpleUrlLogoutSuccessHandler simpleUrlLogoutSuccessHandler) {
    return new SAMLLogoutProcessingFilter(simpleUrlLogoutSuccessHandler,
            securityContextLogoutHandler);
}
@Bean
public VelocityEngine velocityEngine() {
    return VelocityFactory.getEngine();
}`

export const WebGL = `const createDandelion = (gl: GL): Component => {
for(var i = 0; i < segmentSeeds.length; i++) {
  for(var j = 0; j < segmentSeeds[i]; j++) {
    const headRadiusRef = headRadius - 0.01;
    const theta = (Math.PI / (segmentSeeds.length - 1)) * i;
    const phi = (2*Math.PI / segmentSeeds[i]) * j;
    const v = sphereToCartesian(phi, theta);
    const firstPartDir = sphereToCartesian(phi + 0.7, theta);
    const secondPartDir = sphereToCartesian(phi - 0.7, theta);
    const thirdPartDir = sphereToCartesian(phi + 0.35, theta + 0.35);
    const segmentSeedR = headRadius + seedSegmentLength;
    const seedVertices = [
      v[0] * headRadiusRef, v[1] * headRadiusRef, v[2] * headRadiusRef,
      v[0] * segmentSeedR, v[1] * segmentSeedR, v[2] * segmentSeedR,
      v[0] * segmentSeedR + firstPartDir[0] * seedEndLength,
      v[1] * segmentSeedR + firstPartDir[1] * seedEndLength,
      v[2] * segmentSeedR + firstPartDir[2] * seedEndLength,
      v[0] * segmentSeedR + secondPartDir[0] * seedEndLength,
      v[1] * segmentSeedR + secondPartDir[1] * seedEndLength,
      v[2] * segmentSeedR + secondPartDir[2] * seedEndLength,
      v[0] * segmentSeedR + thirdPartDir[0] * seedEndLength,
      v[1] * segmentSeedR + thirdPartDir[1] * seedEndLength,
      v[2] * segmentSeedR + thirdPartDir[2] * seedEndLength,
    ]
`

export const OpenGL = `
public class TessellationProgram extends Program {
  private static final int DISPLACEMENT_SAMPLER = 1;
  private int unifTessellationLevel;
  public TessellationProgram(String tessellator) {
      super(new ProgramAssemblyInfo()
              .setTesselator(tessellator)
              .setVertexShaderLocation("tessellator/vert"),
              ExtendedGLSLProgramCompiler.DEFAULT_COMPILER);
      loadUniforms();
      loadSamplers();
  }
  protected void loadUniforms() {
      this.unifTessellationLevel = getUniformLocation("tessLevel");
  }
  protected void loadSamplers() {
      setTextureLocation("displacementMap", DISPLACEMENT_SAMPLER);
  }
  public void setTessellationLevel(float level) {
      setUniformf(unifTessellationLevel, level);
  }
`

export const JavaASM = `public class IdMethodGenerator 
  extends BuildClassesParallelProcessor {
  public static final String GET_ID_METHOD_NAME = "getType";
  public static final String GET_ID_METHOD_DESC = "()I";
  private String superclassName;
  private IdRegistry idRegistry;
  public IdMethodGenerator(String superclassName) {
      super("id method generator for " + superclassName);
      this.superclassName = superclassName;
  }
  @Override
  protected void init(Context c) {
      this.idRegistry = c.require(IdRegistry.class);
  }
  protected void checkIfMethodPresent(ClassNode classNode) {
      for (MethodNode method : classNode.methods) {
          if (method.name.equals(GET_ID_METHOD_NAME) 
          && method.desc.equals(GET_ID_METHOD_DESC)) {
              logger.warn("getId method should not be overridden by the user");
              classNode.methods.remove(method);
          }
      }
  }
`