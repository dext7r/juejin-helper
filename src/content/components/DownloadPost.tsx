import { message, Popover } from 'antd';
import saveAs from 'file-saver';
import { replaceFileName } from 'share/utils';

const DownloadPost = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const handleDownload = () => {
        const article_info =
            window?.__NUXT__?.state?.view?.column?.entry?.article_info;
        const mark_content = article_info?.mark_content;
        if (!mark_content) {
            messageApi.open({
                type: 'error',
                content: '未获取到文章内容，请刷新重试',
            });
            return;
        }
        const { title } = article_info;
        var blob = new Blob([mark_content], {
            type: 'text/plain;charset=utf-8',
        });
        saveAs(blob, `${replaceFileName(title)}.md`);
    };
    return (
        <Popover content='注意：文章内的图片链接有效期1个小时'>
            <div className='w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-[0_2px_4px_0_rgba(50, 50, 50, .04)] bg-[var(--juejin-layer-5)] text-[var(--juejin-font-3)] hover:text-[var(--juejin-font-2)]'>
                <div className='w-6' onClick={handleDownload}>
                    <svg
                        viewBox='0 0 1024 1024'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            fill='currentColor'
                            d='M895.5 831.7H128c-35.1 0-63.8 28.7-63.8 63.8 0 35.1 28.7 63.8 63.8 63.8h767.5c35.1 0 63.8-28.7 63.8-63.8 0-35.1-28.7-63.8-63.8-63.8zM811 383H672.2V123.8c0-33.3-27-60.4-60.4-60.4H412.4c-33.3 0-60.4 27-60.4 60.4V383H213.2c-26.7 0-40.7 31.8-22.5 51.5L489.6 758c12.1 13.1 32.9 13.1 45.1 0l298.8-323.5c18.1-19.7 4.2-51.5-22.5-51.5z'
                        />
                    </svg>
                </div>
            </div>
        </Popover>
    );
};
export default DownloadPost;
