export default `
precision mediump float;
uniform sampler2D physicsData;
uniform vec2 bounds;
const vec3 TARGET = vec3(0, 0, 0.01);
vec4 texel(vec2 offset) {
  vec2 coord = (gl_FragCoord.xy + offset) / bounds;
  return texture2D(physicsData, coord);
}
void main() {
  int slot = int(mod(gl_FragCoord.x, 2.0));
  vec4 t = texel(vec2(0,0));
  gl_FragColor = t;
}
`;