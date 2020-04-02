export default `
#define PI 3.1415926538
attribute vec2 dataLocation;
uniform sampler2D physicsData;
uniform mediump float time;
uniform vec2 destSize;
varying mediump float index;
varying mediump float sin_factor;
varying mediump float cos_factor;
varying mediump float ttime;
void main() {
  vec4 particle = texture2D(physicsData, dataLocation);
  float phi = particle.x;
  float r = particle.y;
  if(abs(r) < 0.01) {
    gl_Position = vec4(-2, -2, 0, 1);
  } else {
    float aspectRatio = destSize.x / destSize.y;
    float finalPhi = phi + (time / 10000.0);
    float x = cos(finalPhi) * r;
    float y = sin(finalPhi) * r * aspectRatio;
    index = particle.w;
    sin_factor = sin(-finalPhi + (PI / 2.0));
    cos_factor = cos(-finalPhi + (PI / 2.0));
    ttime = time;
    gl_Position = vec4(x, y, 0, 1);
    gl_PointSize = particle.z;
  }
}
`;