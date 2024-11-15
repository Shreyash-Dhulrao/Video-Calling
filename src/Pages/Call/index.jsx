import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { nanoid } from 'nanoid'

const Call = () => {
    const  idData = useParams()
    console.log(idData)
    const nan = nanoid(5)

    const meetings = async (e) => {
        const appID = 845127624
        const serverSecret = "bfbc2aa7e6697dc7a2bdf0634254b7ff"
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, idData.id, nan.toString(), "Shreyash");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: e,
            showScreenSharingButton : false,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
            sharedLinks: [
                {
                  name: 'Copy Link',
                  url:`localhost:5173/roomID/${idData.id}`
                },
              ],
        });
    }
    return (
        <div className='min-h-screen'>
                    <div ref={meetings} />
        </div>
    )
}

export default Call
