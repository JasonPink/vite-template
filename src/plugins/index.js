const components = import.meta.globEager('../components/common/*.vue');

const comFilesArr = Object.keys(components);

export default {
  install(app) {
    for (let i = 0, len = comFilesArr.length; i < len; ++i) {
      const _i = comFilesArr[i];
      const name = comFilesArr[i].slice(21, -4);
      app.component(name, components[_i].default);
    }
  }
};
