import {app, dialog} from 'electron';
import makeDir from 'make-dir';

module.exports = (type, defaultFileName) => {
  const kapturesDir = app.kap.settings.get('kapturesDir');

  let filters;
  if (type === 'mp4') {
    filters = [{name: 'Movies', extensions: ['mp4']}];
  } else if (type === 'webm') {
    filters = [{name: 'Movies', extensions: ['webm']}];
  } else {
    filters = [{name: 'Images', extensions: ['gif']}];
  }

  return makeDir(kapturesDir).then(() => {
    return dialog.showSaveDialog({
      title: defaultFileName,
      defaultPath: `${kapturesDir}/${defaultFileName}`,
      filters
    });
  });
};
