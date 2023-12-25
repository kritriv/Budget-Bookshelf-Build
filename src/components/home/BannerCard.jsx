import heroimg from "../../assets/heroimg.png";

const BannerCard = () => {
  return (
    <div className='banner'>
      <div >
        <img src={heroimg} alt="" className="rounded md:w-10/12" />
      </div>
    </div>
  )
}

export default BannerCard