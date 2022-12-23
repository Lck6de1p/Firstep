import { viteMockServe } from 'vite-plugin-mock';
export default viteMockServe({
  mockPath: 'mock',
  //  这样可以控制关闭mock的时候不让mock打包到最终代码内
  injectCode: `
    import { setupProdMockServer } from './mockProdServer';
    setupProdMockServer();
	`
});
