import './Chatbot.css'

export default function Chatbot() {
  return (
    <div>
    <p style={{ textAlign: 'center' }}>Botpress Chatbot in a <span></span><span></span></p>
    <div className="absolute inset-4 ">
        <div
            className="center-div relative h-full w-full overflow-clip rounded-md border border-zinc-200 bg-white p-2 px-0 py-0"
        >
            <iframe
                style={{ border: 'none' }}
                srcDoc={`<body><script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
                <script>
                    window.botpressWebChat.init({
                        'composerPlaceholder': 'Chat with bot',
                        'botConversationDescription': 'This chatbot was built surprisingly fast with Botpress',
                        'botName': 'Name',
                        'botId': 'f87c4530-e481-49dd-8841-236d83aa1389',
                        'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                        'messagingUrl': 'https://messaging.botpress.cloud',
                        'clientId': 'f87c4530-e481-49dd-8841-236d83aa1389',
                        'enableConversationDeletion': true,
                        'showPoweredBy': true,
                        'className': 'webchatIframe',
                        'containerWidth': '100%',
                        'layoutWidth': '100%',
                        'hideWidget': true,
                        'showCloseButton': false,
                        'disableAnimations': true,
                        'closeOnEscape': false,
                        'showConversationsButton': false,
                        'enableTranscriptDownload': false,
                        'stylesheet':'https://webchat-styler-css.botpress.app/prod/code/3fcd3e4e-d5bc-4bf5-8699-14b621b3ada2/v31782/style.css'
                    });
                    window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
                </script></body>`}
                width="100%"
                height="100%"
            ></iframe>
        </div>
    </div>
</div>

  )
}
