 import { View,Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SignUp from './MriScane/SignUp';
import Uterine from './MriScane/Uterine'
import Brain from'./MriScane/Brain'
import Cardio from './MriScane/Cardio'
import Liver from './MriScane/Liver'
import FemalePage from './MriScane/FemalePage'
import RegisterBaheya from './MriScane/RegisterBaheya'
import Done from './MriScane/Done'
import RegisterSugar from './MriScane/RegisterSugar'
import RegisterMother from './MriScane/RegisterMother'
import Voltarate from './MriScane/Voltarate'
import Login from './MriScane/Login'
import Quis from './MriScane/Quis'
import Breast from './MriScane/Breast'



import React from 'react';






const Project=createStackNavigator(
    {
        page_1:{
            screen:SignUp
        },
        page_13:{
            screen:Login
        }
    },
    {
        headerMode:'none'
    }
)


const Brainy=createStackNavigator(
    {
    page_2:{
        screen:Brain
    }
    },
    {
        headerMode:'none'
    }
)


const Uteriney=createStackNavigator(
    {
        page_3:{
            screen:Uterine
        }
    },
    {
        headerMode:'none'
    }
)


const Breasty=createStackNavigator(
    {
        page_4:{
            screen:Breast
        }
    },
    {
        headerMode:'none'
    }
)

const Cardiology=createStackNavigator(
    {
        page_5:{
            screen:Cardio
        }
    },
    {
        headerMode:'none'
    }
)


const Livery=createStackNavigator(
    {
        page_15:{
            screen:Liver
        }
    },
    {
        headerMode:'none'
    }
)

const Quiss=createStackNavigator(
    {
        page_6:{
            screen:Quis
        }
    },
        {
            headerMode:'none'
        }
    
)

const Baheya=createStackNavigator(
    {
        page_7:{
            screen:FemalePage
        },
        page_8:{
            screen:RegisterBaheya
        },
        page_9:{
            screen:RegisterMother
        },
        page_10:{
            screen:RegisterSugar
        },
        page_11:{
            screen:Voltarate
        },
        page_12:{
            screen:Done
        }
        
    },
    {
        headerMode:'none'
    }
)

 export default createAppContainer(
     createSwitchNavigator(
         { 
            Quiss:Quiss,

            Project:Project,
            Brainy:Brainy,
            Uteriney: Uteriney,
            Breasty:Breasty,
            Cardiology: Cardiology,
            Livery:Livery,
            Baheya:Baheya,
           

         },
        
     )
 )












