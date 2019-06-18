import getConfig from 'next/config';
const { publicRuntimeConfig: { TEST } } = getConfig();

export default () => (<div>{TEST}</div>);
