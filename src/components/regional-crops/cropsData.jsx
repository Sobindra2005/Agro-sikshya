import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const cropData = {
    LandPreparation: {
        crop: 'Tomato',
        stepone: 'नर्सरी व्याडको तयारी',
        Pictureone: 'https://soil.narc.gov.np/media/media/crop/l1_FReXF4i_1UbU8Mm.png',
        descriptionone: 'नर्सरी ब्याडको माटो मसिनो नभएसम्म खनजोत गर्नुपर्छ...',
        steptwo: 'नर्सरी व्याडमा वीउ राख्ने',
        Picturetwo: 'https://soil.narc.gov.np/media/media/crop/l2_Lu9r6PO_3sy2omd.png',
        descriptiontwo: 'पाँच—पाँच सेन्टिमिटरको फरकमा बनाइएका लाइनमा...'
    },
    Nursery: {
        crop: 'Tomato',
        stepone: 'नर्सरीको हेरचाह',
        Pictureone: 'https://soil.narc.gov.np/media/media/crop/Picture3_jGuRrpM.png',
        descriptionone: 'बेर्नाको राम्रो बृद्धि विकास भए नभएको...',
        steptwo: 'बेर्ना जरखर्याउने र उखेल्ने',
        Picturetwo: 'https://soil.narc.gov.np/media/media/crop/Picture4_enWGVRg.png',
        descriptiontwo: 'नर्सरीलाई कुखुरा र जनावरबाट जोगाउन बार...'
    },
    Transplanting: {
        crop: 'Tomato',
        stepone: 'बेर्ना सार्ने',
        Pictureone: 'https://soil.narc.gov.np/media/media/crop/Picture10_BLl0wJT.png',
        descriptionone: 'गोलभेंडाको अग्लो जातलाई १५० से.मि. चौडाइ...'
    },
    TopDressing: {
        crop: 'Tomato',
        stepone: 'मल व्यवस्थापन',
        Pictureone: 'https://soil.narc.gov.np/media/media/crop/Picture12_Ctl84ff.png',
        descriptionone: 'सिद्धान्ततः बालीले आफ्नो बाली अवधिभरि...'
    },
    Harvesting: {
        crop: 'Tomato',
        stepone: 'गोलभेंडामा थाँक्रा दिने',
        Pictureone: 'https://soil.narc.gov.np/media/media/crop/Picture14_P0h0jVK.png',
        descriptionone: 'गोलभेंडाको बोटलाई माथि बढ्न र राम्ररी फल...'
    },
    PostHarvest: {
        crop: 'Tomato',
        stepone: 'सफाई र छुट्याउने',
        Pictureone: 'https://soil.narc.gov.np/media/media/crop/Picture16_Sheuobf.png',
        descriptionone: 'गोलभेंडा टिपिसके पछि कुहिएको, क्षति...'
    }
};


const CropLayout = () => {

    
        return (

            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold text-center mb-4">Crop Data: {cropData.LandPreparation.crop}</h1>
    
                {/* Land Preparation */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold">Land Preparation</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <h3 className="font-bold text-xl">{cropData.LandPreparation.stepone}</h3>
                            <p>{cropData.LandPreparation.descriptionone}</p>
                            <img className="mt-2 " src={cropData.LandPreparation.Pictureone} alt="Land Preparation Step 1" />
                        </div>
                        <div>
                            <h3 className="font-bold">{cropData.LandPreparation.steptwo}</h3>
                            <p>{cropData.LandPreparation.descriptiontwo}</p>
                            <img className="mt-2 " src={cropData.LandPreparation.Picturetwo} alt="Land Preparation Step 2" />
                        </div>
                    </div>
                </div>
    
                {/* Nursery */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Nursery</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <h3 className="font-bold">{cropData.Nursery.stepone}</h3>
                            <p>{cropData.Nursery.descriptionone}</p>
                            <img className="mt-2 " src={cropData.Nursery.Pictureone} alt="Nursery Step 1" />
                        </div>
                        <div>
                            <h3 className="font-bold">{cropData.Nursery.steptwo}</h3>
                            <p>{cropData.Nursery.descriptiontwo}</p>
                            <img className="mt-2 sm:ml-56" src={cropData.Nursery.Picturetwo} alt="Nursery Step 2" />
                        </div>
                    </div>
                </div>
    
                {/* Transplanting */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Transplanting</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-bold">{cropData.Transplanting.stepone}</h3>
                            <p>{cropData.Transplanting.descriptionone}</p>
                            <img className="mt-2 sm:ml-56" src={cropData.Transplanting.Pictureone} alt="Transplanting Step 1" />
                        </div>
                    </div>
                </div>
    
                {/* Top Dressing */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Top Dressing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-bold">{cropData.TopDressing.stepone}</h3>
                            <p>{cropData.TopDressing.descriptionone}</p>
                            <img className="mt-2 sm:ml-56" src={cropData.TopDressing.Pictureone} alt="Top Dressing Step 1" />
                        </div>
                    </div>
                </div>
    
                {/* Harvesting */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Harvesting</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-bold">{cropData.Harvesting.stepone}</h3>
                            <p>{cropData.Harvesting.descriptionone}</p>
                            <img className="mt-2 sm:ml-56" src={cropData.Harvesting.Pictureone} alt="Harvesting Step 1" />
                        </div>
                    </div>
                </div>
    
                {/* Post Harvest */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Post Harvest</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-bold">{cropData.PostHarvest.stepone}</h3>
                            <p>{cropData.PostHarvest.descriptionone}</p>
                            <img className="mt-2 sm:ml-56" src={cropData.PostHarvest.Pictureone} alt="Post Harvest Step 1" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
// else{
//     return(

// <div className='w-full h-full justify-center items-center'>

// Data is not available in the database right now .......

// </div>

//     )
// }

    
  
// };

export default CropLayout;