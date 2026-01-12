import Competences from './pages/Competences';
import Contact from './pages/Contact';
import ExperiencePro from './pages/ExperiencePro';
import Futur from './pages/Futur';
import Home from './pages/Home';
import Parcours from './pages/Parcours';
import Passions from './pages/Passions';
import ProjectDetail from './pages/ProjectDetail';
import Projets from './pages/Projets';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Competences": Competences,
    "Contact": Contact,
    "ExperiencePro": ExperiencePro,
    "Futur": Futur,
    "Home": Home,
    "Parcours": Parcours,
    "Passions": Passions,
    "ProjectDetail": ProjectDetail,
    "Projets": Projets,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};