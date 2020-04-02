export default `
uniform sampler2D particleTexture;
varying mediump float index;
varying mediump float sin_factor;
varying mediump float cos_factor;
varying mediump float ttime;
void main() {
  
  int j = int(index);
  int i = j;
  int y = i / 8;
  int x = i - (y * 8);
  mediump vec2 rotatedPointCoord = vec2((gl_PointCoord.x - 0.5), gl_PointCoord.y - 0.5) * mat2(cos_factor, sin_factor, -sin_factor, cos_factor) + vec2(0.5);
  mediump vec2 texCoord = rotatedPointCoord.xy / 8.0;
  mediump vec2 position = vec2(0.125 * float(x), 0.125 * float(y)) + (texCoord);
  mediump vec4 textureColor = texture2D(particleTexture, position);
  mediump vec4 color = vec4(vec3(1.0) - textureColor.rgb, textureColor.a);
  gl_FragColor = color;
}
`;