import onClickOutside from "react-onclickoutside"

function MediaHost({ mediaUrl, onDismiss }) {
    MediaHost.handleClickOutside = () => {
        console.log('clicked outside')
        onDismiss()
    }

    let isImage = !(mediaUrl.endsWith('.mp4') || mediaUrl.endsWith('.m4v'))

    let host = isImage
        ? <img src={mediaUrl} className="super-center" />
        : <video src={mediaUrl} className="super-center" controls />

    return (
        <div>
            { host }
        </div>
    )
}

const clOutCfg = {
    handleClickOutside: () => MediaHost.handleClickOutside
}

export default onClickOutside(MediaHost, clOutCfg)