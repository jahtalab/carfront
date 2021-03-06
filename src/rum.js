import { init as initApm } from 'elastic-apm-js-base'

var apm = initApm({
  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'carfront',
  // Set the version of your application
  // Used on the APM Server to find the right sourcemap
  serviceVersion: '0.90',
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'https://5fea15b641064bfa800ef7591069c865.apm.us-central1.gcp.cloud.es.io:443',
  // For distributed tracing to different origin (CORS)
  // distributedTracingOrigins: ['http://localhost:8080'],
})

export default apm;