import React from 'react'
import { EventData, featuredData, ScheduleData, ProductData } from './data'
import styled from 'styled-components'
import Spline from '../Charts/Spline'
import Barcharts from '../Charts/Barcharts'
import bxCalendar from '@iconify/icons-bx/bx-calendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react/dist/offline';
import Pie from '../Charts/Pie'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import  usIlChicagoMill  from '@react-jvectormap/chicago/dist/usIlChicagoMill.json';
import { VectorMap } from "@react-jvectormap/core";



const FeaturedContainer = styled.div`
    width: 100%;
    display: flex;
    height: auto;
    justify-content: space-between; 
    .Pee{
        font: 10px
    }   
`
const FeaturedItem = styled.div`
    flex: 1;
    margin: 10px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    background: white;
    min-width:${props => props.tWidth || "auto"};
    max-height:${props => props.tHeight || "auto"};
`
const FeaturedItem2 = styled.div`
    flex: 1;
    margin: 10px 20px;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    background: white;
    min-width:${props => props.tWidth || "auto"};
    max-height:${props => props.tHeight || "auto"};
`

const FeaturedWrap = styled.div`
    flex: 1;
    padding: 0px;
    cursor: pointer;
    background: transparent;
    min-width:${props => props.tWidth || "auto"};
    max-height:${props => props.tHeight || "auto"};
`
const FeaturedTitle = styled.span`
    font-size: 13px;
`
const FeaturedMoneyContainer = styled.div`
    display: flex;
    align-items: center;
    .featuredMoney{
        font-size: 16px;
        font-weight: 600;
    }
    .featuredMoneyRate{
        display: flex;
        align-items: center;
        margin-left: 20px;
    }.featuredIcon{
        font-size: 14px;
        margin-left: 5px;
        color: green;
    }.featuredIcon.negative{
        color: red;
    }
`

const SmWidgetList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    .SmWidgetListItem{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0px;
    }.Username{
        font-weight:50;
        font: 13px;
    }
`

const Pee = styled.p`
    font-size: 13px;
`


const LgWidgetButton = styled.div`
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
    color:${props => props.fdColor || "#2a7ade"};
`
const LgWidgetTable = styled.table`
    width: 100%;
    border-spacing: 20px;
`
const LgWidgetTh = styled.th`
    text-align: left;
    font-weight: 250;
`
const LgWidgetUser = styled.td`
    display: flex;
    align-items: center;
`
const LgWidgetImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`
const WidgetImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 10%;
    object-fit: cover;
    margin-right: 10px;
`
const LightTd = styled.td`
    font-weight: 300;
`
const MapContainer = styled.div`
  height: 380px;
`
const ServicesWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`

const Featured = () => {
  return (
    <main>
          
        <FeaturedContainer>
            <FeaturedWrap tWidth={"60%"}>
            <ServicesWrapper>
                {featuredData && featuredData.map((item, index ) =>(
            <FeaturedItem2 key={index}>
                <FeaturedTitle>{item.title}</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <span className='featuredMoney'>{item.amount}</span>
                    
                    <span className='featuredMoneyRate'><LgWidgetButton fdColor={item.color}>{item.point}</LgWidgetButton></span>
                </FeaturedMoneyContainer>
            </FeaturedItem2>
        ))} 
            </ServicesWrapper>
            <FeaturedItem>
                <h3>Sales Report</h3>
            <Spline />
            </FeaturedItem>
            </FeaturedWrap>
            <FeaturedItem tHeight={"600px"}>
            <h4>Top Selling Product</h4>
            <LgWidgetTable>
            {ProductData && ProductData.map((item) => (
                            <tr>
                                <LgWidgetUser>
                                    <WidgetImg 
                                        src={require("../../assets/images/img-"+item.pic)}
                                    ></WidgetImg>
                                </LgWidgetUser>
                                <td>{item.name}</td>
                                <LightTd>{item.amount}</LightTd>
                            </tr>
                        ))}
            </LgWidgetTable>
            </FeaturedItem>
        </FeaturedContainer>     
    
        <FeaturedContainer>
        <FeaturedItem>
            <Barcharts />
         </FeaturedItem>
            <FeaturedItem>
            <SmWidgetList>
                <h4>Upcoming Events</h4>
                    {ScheduleData && ScheduleData.map((appointment, index ) => (
                        <li key={index} className='SmWidgetListitem'>
                           
                                <Pee> <Icon icon={bxCalendar} /> <span className='Username'>{appointment.date}</span> <span>&nbsp;</span> 
                           <span className='Title'>{appointment.appointment}</span> </Pee>
                                
                        </li>
                    ))}
            </SmWidgetList>
            </FeaturedItem>
            <FeaturedItem>
                <Pie />
            </FeaturedItem>
        </FeaturedContainer>
        <FeaturedContainer>
            <FeaturedItem tWidth={"60%"}>
            <h4>Upcoming Events</h4>
                    <LgWidgetTable>
                        <tr>
                            <LgWidgetTh>Date</LgWidgetTh>
                            <LgWidgetTh>Customer</LgWidgetTh>
                            <LgWidgetTh>Status</LgWidgetTh>
                            <LgWidgetTh>Total</LgWidgetTh>
                        </tr>
                        {EventData && EventData.map((item) => (
                            <tr>
                                <LightTd>{item.date}</LightTd>
                                <LgWidgetUser>
                                    <LgWidgetImg 
                                        src={require("../../assets/images/avatar-"+item.pic)}
                                    ></LgWidgetImg>
                                    <span>{item.customer}</span>
                                </LgWidgetUser>
                                <td><LgWidgetButton fdColor={item.color}><FontAwesomeIcon icon={faCircle}/>{item.status}</LgWidgetButton></td>
                                <LightTd>{item.total}</LightTd>
                            </tr>
                        ))}
                    </LgWidgetTable>
            </FeaturedItem>
            <FeaturedItem tHeight={"80%"}>
            <h4>City Order Statistics</h4>
            <MapContainer>
                <VectorMap map={usIlChicagoMill} fill="#3b96ce" backgroundColor="#3b96ce" width="100%"
height="100%"
position="relative"
overflow=" hidden"
containerStyle={{
                           width: '100%',
                           height: '100%',
                           color: 'red'
                       }}/>
            </MapContainer>
            </FeaturedItem>
        </FeaturedContainer>
    </main>

  )
}


export default Featured