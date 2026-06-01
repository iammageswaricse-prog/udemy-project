import two from '../assets/images/section 1 (1).jpg'
import three from '../assets/images/section 1 (2).jpg'
import four from '../assets/images/section 1 (3).jpg'
import five from '../assets/images/section 1 (4).jpg'


function Popular() {
    return (

        <div className="popular">
            <h1 className="popular__title">Most popular</h1>
            <p className="popular__subtitle">pick the best fit</p>
        <div className="popular__container">
            <div className="course__card">
                <img src={two} alt="Course" />
                <h3>2023 python Data visualisation Masterclass</h3>
                <p> col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course__card">
                <img src={three} alt="Course" />
                <h3>2023 python Data visualisation Masterclass</h3>
                <p> col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course__card">
                <img src={four} alt="Course" />
                <h3>2023 python Data visualisation Masterclass</h3>
                <p> col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course__card">
                <img src={five} alt="Course" />
                <h3>2023 python Data visualisation Masterclass</h3>
                <p> col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course__card">
                <img src={two} alt="Course" />
                <h3>2023 python Data visualisation Masterclass</h3>
                <p> col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course__card">
                <img src={three} alt="Course" />
                <h3>2023 python Data visualisation Masterclass</h3>
                <p> col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course__card">
                <img src={four} alt="Course" />
                <h3>2023 python Data visualisation Masterclass</h3>
                <p> col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>    
            <div className="course__card">
                <img src={five} alt="Course" />
                <h3>2023 python Data visualisation Masterclass</h3>
                <p> col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            

        </div>
    </div>
    )
}

export default Popular;