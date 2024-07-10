import React , {useState}from 'react'
import {BsChevronCompactLeft , BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import image1 from "./../assets/images/imge1.jpg"
import image2 from "./../assets/images/imge2.jpg"
import image3 from "./../assets/images/imge3.jpg"
import image4 from "./../assets/images/imge4.jpg"
import image5 from "./../assets/images/imge5.jpg"
import image6 from "./../assets/images/imge6.jpg"
import image7 from "./../assets/images/imge44.jpg"

const Carousel = () => {
    const myslides = [image1,image2,image3,image4,image5,image6,image7]

    const [currentIndex, setCurrentIndex] = useState(0);
 
    const nextImage = () => {
     const isLastSlide = currentIndex === myslides.length-1
     const newIndex = isLastSlide ? 0 : currentIndex + 1
     setCurrentIndex(newIndex)
 };
 
 const prevImage = () => {
     const isFirstSlide = currentIndex === 0
     const newIndex = isFirstSlide ? myslides.length - 1 : currentIndex - 1 
     setCurrentIndex(newIndex)
 }
 
 const goToSlide= (slideIndex) =>{
     setCurrentIndex(slideIndex)
 }
  return (
    <div>
       <div className='max-w-[70%] min-w-36 relative py-20 mx-auto h-[1000px] min-h-36 px-6 group'>
        <div style={{backgroundImage:`url(${myslides[currentIndex]})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
      <div className='directions'>
        <div className="leftarrow">
           <BsChevronCompactLeft onClick={prevImage}   className='hidden group-hover:block absolute top-[50%] left-0 -translate-y-1/2 rounded-full  text-black bg-slate-500 cursor-pointer text-5xl '/>
        </div>
        <div className="rightarrow">
            <BsChevronCompactRight onClick={nextImage} className='hidden group-hover:block absolute top-[50%] right-0 -translate-y-1/2  rounded-full  text-black bg-slate-500 cursor-pointer text-5xl'/>
        </div>
      </div>
      <div className="dots flex top-4 justify-center py-2 ">
            {myslides.map((myslides,slideIndex)=>(
                 <div key={slideIndex} onClick={()=>goToSlide(slideIndex)}><RxDotFilled className='text-5xl  text-slate-500 cursor-pointer'/></div> 
            ))}
      </div>
      
      
      
    </div>
    </div>
  )
}

export default Carousel
