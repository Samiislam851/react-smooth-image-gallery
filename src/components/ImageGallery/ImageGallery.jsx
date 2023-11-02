import React, { useState } from 'react';
import { BsCardImage } from 'react-icons/bs';
const ImageGallery = () => {


    const [images, setImages] = useState([
        { id: 1, src: '/images/image-1.webp', featured: true },
        { id: 2, src: '/images/image-2.webp', featured: false },
        { id: 3, src: '/images/image-3.webp', featured: false },
        { id: 4, src: '/images/image-4.webp', featured: false },
        { id: 5, src: '/images/image-5.webp', featured: false },
        { id: 6, src: '/images/image-6.webp', featured: false },
        { id: 7, src: '/images/image-7.webp', featured: false },
        { id: 8, src: '/images/image-8.webp', featured: false },
        { id: 9, src: '/images/image-9.webp', featured: false },
        { id: 10, src: '/images/image-10.jpeg', featured: false },
        { id: 11, src: '/images/image-11.jpeg', featured: false },
        { id: 11, src: '', featured: false, addImage: true },




    ]);





    return (
        <div className='border rounded-lg shadow-sm p-2 md:p-5 md:w-[70%] mx-auto mb-20'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
                {images.map(image =>
                    <div className={`${image.featured && 'col-span-2 row-span-2'}  rounded-lg`}>

                        {image.addImage ? <>
                            <div className='border border-2 border-dashed  relative rounded-md   w-full h-full' >
                                <input type="file"
                                    name="addFile" className='hidden'
                                    id="addImage" />

                                <label htmlFor="addImage" className='w-full h-full  absolute cursor-pointer ' >
                                    <div className='text-center mt-[50%] translate-y-[-50%]  mx-auto '>
                                        <BsCardImage className='mx-auto text-gray-600   ' />
                                        <h2 className='text-gray-600 text-xs'>Add Images</h2>

                                    </div>
                                </label>
                            </div>

                        </> :
                            <div className='border rounded-md hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-300'>
                                <img src={image.src} className={`image-full rounded-md `} alt="" />
                            </div>
                        }


                    </div>)}
            </div>
        </div>
    );
}

export default ImageGallery;
