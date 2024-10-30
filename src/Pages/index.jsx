import React, { lazy, useState, useEffect, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useContextHook } from 'use-context-hook';
import pages from '../nav.json';
import Layout from '../components/Layout';
import Loaders from '../components/atoms/Loaders';
// import Toast from '../components/molecules/Toast';
import { AuthContext } from '../Context/authContext';

// const importView = file =>
//   lazy(() =>
//     import(`./${file}`).catch(() => {
//       Toast({
//         type: 'error',
//         message: `Error in importing ${file}`,
//       });
//     }),
//   );

export default function Index() {
  const { allowedPages, loading_user } = useContextHook(AuthContext, ['allowedPages', 'loading_user']);
  // const loading_user = false;
  const history = useNavigate();

  const { view } = useParams();
  const metaViewData = pages;
  const [selectedView, setSelectedView] = useState([]);

  // async function loadView(filtered) {
  //   const promise = filtered.map(async _view => {
  //     const View = await importView(_view.file);

  //     // eslint-disable-next-line no-use-before-define
  //     return <View key={_view.id} selectView={selectView} />;
  //   });
  //   Promise.all(promise).then(setSelectedView);
  // }

  // async function selectView(file) {
  //   const filtered = metaViewData.filter(elem => elem.file === file);

  //   loadView([filtered[0]]);
  // }
  // useEffect(() => {
  //   let fileToLoad = view;

  //   if (!allowedPages.includes(fileToLoad)) {
  //     fileToLoad = allowedPages.length > 0 ? allowedPages[0] : 'dashboard';
  //   }
  //   if (fileToLoad === 'null' || fileToLoad === '/null') {
  //     fileToLoad = 'dashboard';
  //   }

  //   if (allowedPages.length === 1 && allowedPages[0] === 'no-permissions') {
  //     fileToLoad = 'no-permissions';
  //   }

  //   if (allowedPages.includes(fileToLoad)) {
  //     fileToLoad = allowedPages[allowedPages.indexOf(fileToLoad)];
  //   }

  //   history(`/${fileToLoad}`, { replace: true });

  //   selectView(fileToLoad);
  // }, [view, allowedPages, loading_user]);

  return loading_user ? (
    <Loaders viewLoader />
  ) : (
    <Layout
      merged={view === 'dashboard'}
      title={view}
      showTemplate={metaViewData?.filter(elem => elem.file === view)[0]?.navigations}
      topBar>
      <Suspense fallback={<Loaders viewLoader />}>{selectedView}</Suspense>
    </Layout>
  );
}
