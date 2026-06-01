import two from '../assets/images/section 1 (1).jpg'
import three from '../assets/images/section 1 (2).jpg'
import four from '../assets/images/section 1 (3).jpg'
import five from '../assets/images/section 1 (4).jpg'

function Recommended() {
    return (
        <div className="recommended">
            <h1 className="recommended__title">Recommended for you</h1>
            <p>pick for the best fit</p>
            <div className="recommended__container">
                <div className="course__card">
                    <img src={two} alt="" />
                    <h3>2023 python Data visualisation Masterclass</h3>
                    <p> col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course__card">
                    <img src={three} alt="" />
                    <h3>2023 python Data visualisation Masterclass</h3>
                    <p> col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course__card">
                    <img src={four} alt="" />
                    <h3>2023 python Data visualisation Masterclass</h3>
                    <p> col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course__card">
                    <img src={five} alt="" />
                    <h3>2023 python Data visualisation Masterclass</h3>
                    <p> col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
            </div>
        </div>
    )
}

export default Recommended;