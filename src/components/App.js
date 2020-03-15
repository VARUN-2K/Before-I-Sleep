import React, { Component } from 'react';

import Navbar from './Navbar';
import Content from './Content';
import '../css/homepage.css';
import Footer from './Footer';

import {Route , BrowserRouter , Link} from 'react-router-dom';
import AboutMeFileOfLife from './AboutMeFileOfLife';
import FinancialFileOfLife from './FinancialFileOfLife';
import ResidenceFileOfLife from './ResidenceFileOfLife';
import AgingNeedsFileOfLife from './AgingNeedsFileOfLife';
import LegalFileOfLife from './LegalFileOfLife';
import MedicalFileOfLife from './MedicalFileOfLife';
import DeceasedEstateFile from './DeceasedEstateFile';
import CareerFileOfLife from './CareerFileOfLife';


import AircraftDetailPage from './AircraftDetailPage';
import BoatsDetailPage from './BoatsDetailPage';
import Jewels from './Jewels';
import FamilyDetailPage from './FamilyDetailPage';
import MarriageDetailPage from './MarriageDetailPage';
import PetsDetailPage from './PetsDetailPage';
import Achievements from './Achievements';
import Membership from './Membership';
import Vehicles from './Vehicles';
import LoginDetailsDetailPage from './LoginDetailsDetailPage';
import Partnerships from './Partnerships';
import MilitaryService from './MilitaryService';
import DivorceDetailPage from './DivorceDetailPage';
import IdentificationDocuments from './IdentificationDocuments';
import OtherAssets from './OtherAssets';


import Mylawyers from './Mylawyers';
import MyWill from './MyWill';
import PowerOfAttorney from './PowerOfAttorney';
import Trust from './Trust';

import Accounts from './FinancialFileOfLife/Accounts';
import FinancialAdvisors from './FinancialFileOfLife/FinancialAdvisors';
import MoneyBorrowed from './FinancialFileOfLife/MoneyBorrowed';
import MoneyLent from './FinancialFileOfLife/MoneyLent';
import Pensions from './FinancialFileOfLife/Pensions';
import DebitOrders from './FinancialFileOfLife/DebitOrders';
import Donations from './FinancialFileOfLife/Donations';
import Insurance from './FinancialFileOfLife/Insurance';
import Guarantees from './FinancialFileOfLife/Guarantees';
import Retail from './FinancialFileOfLife/Retail';

import ResidenceInformation from './ResidenceFileOfLife/ResidenceInformation';
import ResidenceMaintain from './ResidenceFileOfLife/ResidenceMaintain';
import ResidenceUtilities from './ResidenceFileOfLife/ResidenceUtilities';

import BucketList from './AgingFileOfLife/BucketList';
import CareTaker from './AgingFileOfLife/CareTaker';
import FuneralArrangements from './AgingFileOfLife/FuneralArrangements';
import FuneralCeremony from './AgingFileOfLife/FuneralCeremony';
import LetterLoved from './AgingFileOfLife/LetterLoved';

import EmergencyContacts from './MedicalFileOfLife/EmergencyContacts';
import AdvanceDirective from './MedicalFileOfLife/AdvanceDirective';
import { Allergies } from './MedicalFileOfLife/Allergies';
import BloodGroup from './MedicalFileOfLife/BloodGroup';
import CurrentIllness from './MedicalFileOfLife/CurrentIllness';
import MedicalHistory from './MedicalFileOfLife/MedicalHistory';
import TherapySpecialists from './MedicalFileOfLife/TherapySpecialists';

import CertificationDegrees from './CareerFileOfLife/CertificationDegrees';


import AircraftForm from './AddItemForms/AircraftForm';
import EmergencyContactsForm from './AddItemForms/EmergencyContactsForm';
import AdvanceDirectiveForm from './AddItemForms/AdvanceDirectiveForm';
import AllergyForm from './AddItemForms/AllergyForm';
import MedicAlertForm from './AddItemForms/MedicAlertForm';
import CurrentIllnessForm from './AddItemForms/CurrentIllnessForm';
import MedicalHistoryForm from './AddItemForms/MedicalHistoryForm';
import TherapySpecialistForm from './AddItemForms/TherapySpecialistForm';


import myWillForm from './LegalForms/myWillForm';
import myLawyersForm from './LegalForms/myLawyersForm';
import MyTrustsForm from './LegalForms/mytrustsForm';
import PowerOfAttorneyForm from './LegalForms/PowerOfAttorneyForm';
import EmergencyContactInfo from './MedicalfolInformationPage/EmergencyContactInfo';
import CareAsGrowOld from './AgingFileOfLifeForms/CareAsGrowOld';

import IdentificationForm from './AboutFileOfLifeForms/IdentificationForm';
import FamilyForm from './AboutFileOfLifeForms/FamilyForm';
import LoginDetailForm from './AboutFileOfLifeForms/LoginDetailForm';
import BusinessInfo from './CareerFileOfLife/BusinessInfo';
import BusinessForm from './CareerFileOfLifeForms/BusinessForm';
import ResidenceFileOfLifeForm from './ResidenceFileOfLifeForms/ResidenceFileOfLifeForm';

import AdvanceDirectiveInfo from './MedicalfolInformationPage/AdvanceDirectiveInfo';
import AllergyInfo from './MedicalfolInformationPage/AllergyInfo';
import BloodGroupMedicAlertInfo from './MedicalfolInformationPage/BloodGroupMedicAlertInfo';
import CurrentIllnessInfo from './MedicalfolInformationPage/CurrentIllnessInfo';
import medicalHistoryInfo from './MedicalfolInformationPage/medicalHistoryInfo';
import TherapistInfo from './MedicalfolInformationPage/TherapistInfo';
import IdentificationDocsInfo from './AboutFOLInformationPage/IdentificationDocsInfo';
import LoginInfo from './AboutFOLInformationPage/LoginInfo';
import mylawyerInfo from './LegalFolInformationPage/mylawyerInfo';
import myWillInfo from './LegalFolInformationPage/myWillInfo';
import BusinessInfoPage from './CareerFileOfLifeInfo/BusinessInfoPage';
import careAsGrowOldInfo from './AgingFileOfLIfeInformationPage/careAsGrowOldInfo';
import Familyinfo from './AboutFOLInformationPage/Familyinfo';



export class App extends Component {
    render() {
        return (
            <div>
                <Navbar /> 
                <BrowserRouter>
                    <div className="contentArea">
                        <Route exact path="/" component={Content} />
                        <Route exact path ="/aboutfol" component={AboutMeFileOfLife} />
                        <Route exact path="/financialfol" component={FinancialFileOfLife} />
                        <Route exact path = "/residencefol" component={ResidenceFileOfLife} />
                        <Route exact path = "/agingfol" component={AgingNeedsFileOfLife} />
                        <Route exact path = "/legalfol" component={LegalFileOfLife} />
                        <Route exact path= "/medicalfol" component = {MedicalFileOfLife} />
                        <Route exact path = "/deceasedestatefile" component={DeceasedEstateFile} />
                        <Route exact path = "/careerfol" component = {CareerFileOfLife } />

                         {/* about file of life */}
                        <Route exact path = "/aboutfol/aircraft" component={AircraftDetailPage} />
                        <Route exact path = "/aboutfol/boats" component={BoatsDetailPage} />
                        <Route exact path="/aboutfol/jewels" component = {Jewels} />
                        <Route exact path="/aboutfol/family" component={FamilyDetailPage} />
                        <Route exact path="/aboutfol/marriage" component={MarriageDetailPage} />
                        <Route exact path="/aboutfol/pet" component={PetsDetailPage} />
                        <Route exact path="/aboutfol/achievement" component={Achievements} />
                        <Route exact path="/aboutfol/membership" component={Membership} />
                        <Route exact path="/aboutfol/vehicle" component={Vehicles} />
                        <Route exact path="/aboutfol/logindetailpage" component={LoginDetailsDetailPage} />
                        <Route exact path="/aboutfol/partnership" component={Partnerships} />
                        <Route exact path ="/aboutfol/military" component={MilitaryService} />
                        <Route exact path ="/aboutfol/divorce" component={DivorceDetailPage} />
                        <Route exact path="/aboutfol/identificationdocument" component={IdentificationDocuments} />
                        <Route exact path="/aboutfol/asset" component={OtherAssets} />

                        {/* LegalFileOfLife */}
                        <Route exact path="/legalfol/mylawyers" component={Mylawyers} />
                        <Route exact path="/legalfol/mywill" component={MyWill} />
                        <Route exact path="/legalfol/powerOfAttorney" component={PowerOfAttorney} />
                        <Route exact path="/legalfol/mytrusts" component={Trust} />
                        
                        {/* FinancialFileOfLife */}
                        <Route exact path="/financialfol/accounts" component={Accounts} />
                        <Route exact path="/financialfol/advisors" component={FinancialAdvisors} />
                        <Route exact path="/financialfol/moneyborrow" component={MoneyBorrowed}/>
                        <Route exact path="/financialfol/moneylent" component={MoneyLent} />
                        <Route exact path="/financialfol/pension" component={Pensions} />
                        <Route exact path="/financialfol/debitOrders" component={DebitOrders} />
                        <Route exact path="/financialfol/donations" component={Donations} />
                        <Route exact path="/financialfol/insurance" component={Insurance}/>
                        <Route exact path="/financialfol/gw" component={Guarantees} />
                        <Route exact path="/financialfol/retail" component={Retail} />

                        {/* Residence File of LIfe */}
                        <Route exact path ="/residencefol/info" component={ResidenceInformation} />
                        <Route exact path="/residencefol/maintain" component={ResidenceMaintain} />
                        <Route exact path="/residencefol/utility" component={ResidenceUtilities} />

                        {/* Aging File of Life */}
                        <Route exact path="/agingfol/bucketlist" component={BucketList} />
                        <Route exact path="/agingfol/care" component={CareTaker}/>
                        <Route exact path="/agingfol/funeralarrangements" component={FuneralArrangements} />
                        <Route exact path="/agingfol/ceremony" component={FuneralCeremony} />
                        <Route exact path="/agingfol/letter" component={LetterLoved} />

                        {/* Medical File of Life */}
                        <Route exact path="/medicalfol/contact" component={EmergencyContacts} />
                        <Route exact path="/medicalfol/advanceDirective" component={AdvanceDirective} />
                        <Route exact path="/medicalfol/allergy" component={Allergies} />
                        <Route exact path="/medicalfol/medicAlert" component={BloodGroup} />
                        <Route exact path = "/medicalfol/illness" component={CurrentIllness} />
                        <Route exact path="/medicalfol/medicalHistory" component={MedicalHistory} />
                        <Route exact path="/medicalfol/therapy" component={TherapySpecialists} />

                        {/* Career File Of Life */}
                        <Route exact path="/careerfol/certification" component={CertificationDegrees} />
                        <Route exact path="/careerfol/business" component = {BusinessInfo} />
                        {/* Medical File Of Life Forms */}
                        <Route exact path="/aircraftform" component={AircraftForm} />
                        <Route exact path="/medicalfol/contact/contactForm" component={EmergencyContactsForm} />
                        <Route exact path="/medicalfol/advanceDirective/advancedForm" component={AdvanceDirectiveForm} />
                        <Route exact path="/medicalfol/allergy/allergyForm" component={AllergyForm} />
                        <Route exact path="/medicalfol/medicAlert/medicAlertForm" component={MedicAlertForm} />
                        <Route exact path="/medicalfol/illness/illnessForm" component={CurrentIllnessForm}/>
                        <Route exact path="/medicalfol/medicalHistory/medicalHistoryForm" component={MedicalHistoryForm} />
                        <Route exact path="/medicalfol/therapy/therapyForm" component={TherapySpecialistForm} />

                        {/* Legal File Of Life Forms */}
                        <Route exact path="/legalfol/mywill/mywillform" component ={myWillForm} />
                        <Route exact path="/legalfol/mylawyers/mylawyersForm" component={myLawyersForm} />
                        <Route exat path="/legalfol/mytrusts/mytrustsForm" component = {MyTrustsForm} />
                        <Route exact path="/legalfol/powerOfAttorney/powerOfAttorneyForm" component={PowerOfAttorneyForm} />
                       </div> 

                       {/* Medical FOL Information Page */}
                       <Route exact path="/emergencyinfo" component={EmergencyContactInfo} />
                       <Route exact path="/advanceinfo" component={AdvanceDirectiveInfo} />
                       <Route exact path="/allergyinfo" component={AllergyInfo} />
                       <Route exact path="/medicalertinfo" component={BloodGroupMedicAlertInfo} />
                       <Route exact path="/illnessinfo" component={CurrentIllnessInfo} />
                       <Route exact path="/medicalhistoryinfo" component={medicalHistoryInfo} />
                       <Route exact path="/therapistinfo" component ={TherapistInfo} />

                       {/* Aging File of life Forms */}
                       <Route exact path="/agingfol/care/careform" component = {CareAsGrowOld} />

                       {/* About File Of life Forms */}
                       <Route exact path="/aboutfol/identificationdocument/identificationform" component = {IdentificationForm}/>
                       <Route exact path="/aboutfol/family/familyform" component={FamilyForm} />
                       <Route exact path="/aboutfol/logindetailpage/loginform" component={LoginDetailForm} />

                        {/* Career File of Life Forms */}
                        <Route exact path="/careerfol/business/businessform" component={BusinessForm} />

                        {/* Residence File Of Life form */}
                        <Route exact path="/residencefol/maintain/maintainform" component={ResidenceFileOfLifeForm} />

                        {/* About File Of Life Info */}
                        <Route exact path="/identificationinfo" component={IdentificationDocsInfo} />
                        <Route exact path="/logininfo" component={LoginInfo} />
                        <Route exact path="/familyinfo" component={Familyinfo} />

                        {/* Legal File Of Life Info */}
                        <Route exact path="/lawyerinfo" component={mylawyerInfo} />
                        <Route exact path="/willinfo" component={myWillInfo} />

                        {/* Career File Of Life Information Page */}
                        <Route exact path="/businessinfo" component={BusinessInfoPage} />

                        {/* Aging File Of Life Info */}
                        <Route exact path="/careasgrowoldinfo" component={careAsGrowOldInfo} />

                </BrowserRouter>
            </div>
        )
    }
}

export default App
