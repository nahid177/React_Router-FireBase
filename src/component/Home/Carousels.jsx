import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Carousels = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <main >

      <div className='flex '>
        <div>
                <ul className='text-white absolute mt-[20%] ml-[330px]  space-y-6'>
                <li>
                  <h2 className='font-bold text-7xl'>Cox's bazar</h2>
                </li>
                <li>
                  <p className='text-[13px]'>Cox's Bazar is a city, fishing port, tourism centre and <br /> district headquarters in southeastern Bangladesh. It is <br /> famous mostly for its long natural sandy beach, and it ...</p>
                </li>
                <li>
                  <button className='rounded-xl text-slate-950 w-[100px] h-[43px] bg-[#F9A51A] font-semibold text-base'>Booking &#8594; </button>
                </li>
                </ul>
        </div>
        <Carousel responsive={responsive} className=' w-[750px] mt-[20%] ml-[60%]'>

          <div className="carousel-item p-[20px]">
            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box " />
            <h2></h2>
          </div>
          <div className="carousel-item p-[20px]">
            <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
          </div>
          <div className="carousel-item p-[20px]">
            <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
          </div>
          <div className="carousel-item p-[20px]">
            <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
          </div>
          <div className="carousel-item p-[20px]">
            <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
          </div>
          <div className="carousel-item p-[20px]">
            <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
          </div>
          <div className="carousel-item p-[20px]">
            <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
          </div>

        </Carousel>
      </div>



    </main>
  )
};

export default Carousels;