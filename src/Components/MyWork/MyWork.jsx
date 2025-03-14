import React from "react";
import arrow_icon from '../../assets/arrow_icon.svg';
import MyWork_data from '../../assets/mywork_data';
import theme_pattern from '../../assets/theme_pattern.svg';
import './MyWork.CSS';

const MyWork = () => {
  return(
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest project's</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="mywork-container">
            {MyWork_data.map((work, index)=>{
                return (
                    <a key={index} href="https://github.com/pranaykumar8?tab=repositories" target="_blank" rel="noopener noreferrer">
                      <img src={work.w_img} alt="Project Preview" />
                    </a>
                  );
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt=""/>
        </div>
    </div>
  )
}

export default MyWork