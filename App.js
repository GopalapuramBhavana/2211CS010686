// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import { UserProvider } from './components/UserContext';
import Exercise from './components/Exercise';
import Yoga from './components/Yoga';
import Diet from './components/Diet';
import Home from './components/Home';
import WeightLoss from './components/WeightLoss';
import BuildMuscle from './components/BuildMuscle';
import GeneralWorkout from './components/GeneralWorkout';
import FaceYoga from './components/FaceYoga';
import HealthYoga from './components/HealthYoga';
import StressReliefAndRelaxYoga from './components/StressReliefAndRelaxYoga';
import StrengthAndFlexibilityYoga from './components/StrengthAndFlexibilityYoga';
import GeneralHealthyDiet from './components/GeneralHealthyDiet';
import WeightLossDiet from './components/WeightLossDiet';
import MuscleGainDiet from './components/MuscleGainDiet';
import CardioVascularExercises from './components/CardioVascularExercises'; 
import StrengthTrainingExercises from './components/StrengthTrainingExercises';
import HighIntensityIntervalTraining from './components/HighIntensityIntervalTraining'; 
import UpperBodyExercises from './components/UpperBodyExercises';
import LowerBodyExercises from './components/LowerBodyExercises';
import CoreExercises from './components/CoreExercises';
import Cardio from './components/Cardio';
import StrengthTraining from './components/StrengthTraining';
import FlexibilityAndCoolDown from './components/FlexibilityAndCoolDown';
import EyeAreaYogaAsanas from './components/EyeAreaYogaAsanas';
import JawAndNeckFirmingYogaAsanas from './components/JawAndNeckFirmingYogaAsanas';
import FullFaceRelaxationYogaAsanas from './components/FullFaceRelaxationYogaAsanas';
import ChestOpeningYogaAsanas from './components/ChestOpeningYogaAsanas';
import BackbendingYogaAsanas from './components/BackbendingYogaAsanas';
import CoreStrengtheningYogaAsanas from './components/CoreStrengtheningYogaAsanas';
import RestorativeYogaAsanas from './components/RestorativeYogaAsanas';
import InversionYogaAsanas from './components/InversionYogaAsanas';
import PranayamaYogaAsanas from './components/PranayamaYogaAsanas';
import AshtangaYogaAsanas from './components/AshtangaYogaAsanas';
import VinyasaYogaAsanas from './components/VinyasaYogaAsanas';
import YinYogaAsanas from './components/YinYogaAsanas';
import DashDiet from './components/DashDiet';
import LowCarbDiet from './components/LowCarbDiet';
import GlutenFreeDiet from './components/GlutenFreeDiet';
import LowFatDiet from './components/LowFatDiet';
import VeganDiet from './components/VeganDiet';
import Whole30Diet from './components/Whole30Diet';
import HighProteinDiet from './components/HighProteinDiet';
import PaleoDiet from './components/PaleoDiet';
import KetogenicDiet from './components/KetogenicDiet';
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/exercise">Exercise</Link></li>
              <li><Link to="/yoga">Yoga</Link></li>
              <li><Link to="/diet">Diet</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/exercise/weight-loss" element={<WeightLoss />} />
            <Route path="/exercise/weight-loss/cardiovascular-exercises" element={<CardioVascularExercises />} />
            <Route path="/exercise/weight-loss/strength-training-exercises" element={<StrengthTrainingExercises />} />
            <Route path="/exercise/weight-loss/hiit" element={<HighIntensityIntervalTraining />} />
            <Route path="/exercise/build-muscle" element={<BuildMuscle />} />
            <Route path="/exercise/build-muscle/upper-body-exercises" element={<UpperBodyExercises />} />
            <Route path="/exercise/build-muscle/lower-body-exercises" element={<LowerBodyExercises />} />
            <Route path="/exercise/build-muscle/core-exercises" element={<CoreExercises />} />
            <Route path="/exercise/general-workout" element={<GeneralWorkout />} />
            <Route path="/exercise/general-workout/cardio" element={<Cardio />} />
            <Route path="/exercise/general-workout/strength-training" element={<StrengthTraining />} />
            <Route path="/exercise/general-workout/flexibility-and-cool-down" element={<FlexibilityAndCoolDown />} />
            <Route path="/yoga" element={<Yoga />} />
            <Route path="/yoga/face-yoga" element={<FaceYoga />} />
            <Route path="/yoga/face-yoga/eye-area-yoga-asanas" element={<EyeAreaYogaAsanas />} />
            <Route path="/yoga/face-yoga/jaw-and-neck-firming-yoga-asanas" element={<JawAndNeckFirmingYogaAsanas />} />
            <Route path="/yoga/face-yoga/full-face-relaxation-yoga-asanas" element={<FullFaceRelaxationYogaAsanas />} />
            <Route path="/yoga/health-yoga" element={<HealthYoga />} />
            <Route path="/yoga/health-yoga/chest-opening-yoga-asanas" element={<ChestOpeningYogaAsanas />} />
            <Route path="/yoga/health-yoga/backbending-yoga-asanas" element={<BackbendingYogaAsanas />} />
            <Route path="/yoga/health-yoga/core-strengthening-yoga-asanas" element={<CoreStrengtheningYogaAsanas />} />
            <Route path="/yoga/stress-relief-and-relax-yoga" element={<StressReliefAndRelaxYoga />} />
            <Route path="/yoga/stress-relief-and-relax-yoga/restorative-yoga-asanas" element={<RestorativeYogaAsanas />} />
            <Route path="/yoga/stress-relief-and-relax-yoga/inversion-yoga-asanas" element={<InversionYogaAsanas />} />
            <Route path="/yoga/stress-relief-and-relax-yoga/pranayama-yoga-asanas" element={<PranayamaYogaAsanas />} />
            <Route path="/yoga/strength-and-flexibility-yoga" element={<StrengthAndFlexibilityYoga />} />
            <Route path="/yoga/strength-and-flexibility-yoga/ashtanga-yoga-asanas" element={<AshtangaYogaAsanas />} />
            <Route path="/yoga/strength-and-flexibility-yoga/vinyasa-yoga-asanas" element={<VinyasaYogaAsanas />} />
            <Route path="/yoga/strength-and-flexibility-yoga/yin-yoga-asanas" element={<YinYogaAsanas />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/diet/general-healthy-diet" element={<GeneralHealthyDiet />} />
            <Route path="/diet/general-healthy-diet/dash-diet" element={<DashDiet />} />
            <Route path="/diet/general-healthy-diet/low-carb-diet" element={<LowCarbDiet />} />
            <Route path="/diet/general-healthy-diet/gluten-free-diet" element={<GlutenFreeDiet />} />
            <Route path="/diet/weight-loss-diet" element={<WeightLossDiet />} />
            <Route path="/diet/weight-loss-diet/low-fat-diet" element={<LowFatDiet />} />
            <Route path="/diet/weight-loss-diet/vegan-diet" element={<VeganDiet />} />
            <Route path="/diet/weight-loss-diet/whole-30-diet" element={<Whole30Diet />} />
            <Route path="/diet/muscle-gain-diet" element={<MuscleGainDiet />} />
            <Route path="/diet/muscle-gain-diet/high-protein-diet" element={<HighProteinDiet />} />
            <Route path="/diet/muscle-gain-diet/paleo-diet" element={<PaleoDiet />} />
            <Route path="/diet/muscle-gain-diet/ketogenic-diet" element={<KetogenicDiet />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
