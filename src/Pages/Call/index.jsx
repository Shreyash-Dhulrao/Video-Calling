import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { nanoid } from 'nanoid'

const Call = () => {
    const idData = useParams()
    console.log(idData)
    const nan = nanoid(5)

    const meetings = async (e) => {
        const appID = 845127624
        const serverSecret = "bfbc2aa7e6697dc7a2bdf0634254b7ff"
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, idData.id, nan.toString(), "Shreyash");
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: e,
            maxUsers: 25,
            showAudioVideoSettingsButton: true,
            showScreenSharingButton: true,
            videoResolutionList: [
                ZegoUIKitPrebuilt.VideoResolution_360P,
                ZegoUIKitPrebuilt.VideoResolution_180P,
                ZegoUIKitPrebuilt.VideoResolution_480P,
                ZegoUIKitPrebuilt.VideoResolution_720P,
              ],
           videoResolutionDefault: ZegoUIKitPrebuilt.VideoResolution_720P, 

            screenSharingConfig: {
                resolution: ZegoUIKitPrebuilt.ScreenSharingResolution_2K
            },
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },

            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `localhost:5173/roomID/${idData.id}`
                },
            ],
        });
    }
    return (
        <div className='min-h-screen'>
            <div ref={meetings} className='w-screen h-screen' />
        </div>
    )
}

export default Call
