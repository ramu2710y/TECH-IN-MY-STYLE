// Central icon registry using react-icons (Font Awesome Solid)
import {
  FaCut, FaSeedling, FaBookOpen, FaFilter, FaLayerGroup,
  FaChartBar, FaProjectDiagram, FaTag, FaBookmark, FaBolt,
  FaRobot, FaLightbulb, FaCode, FaGlobe, FaQuestionCircle,
  FaPuzzlePiece, FaBook, FaSearch, FaComments, FaShieldAlt,
  FaFileAlt, FaKey, FaStar, FaEdit, FaVolumeUp, FaDna,
  FaHospital, FaDollarSign, FaNetworkWired, FaNewspaper,
  FaClipboardList, FaGraduationCap, FaFlask, FaBrain,
  FaChevronRight, FaYoutube, FaExternalLinkAlt,
} from 'react-icons/fa';

export const nlpIconMap = {
  'cut': FaCut,
  'seedling': FaSeedling,
  'book-open': FaBookOpen,
  'filter': FaFilter,
  'layer-group': FaLayerGroup,
  'chart-bar': FaChartBar,
  'project-diagram': FaProjectDiagram,
  'tag': FaTag,
  'bookmark': FaBookmark,
  'bolt': FaBolt,
  'robot': FaRobot,
  'lightbulb': FaLightbulb,
  'code': FaCode,
  'globe': FaGlobe,
  'question-circle': FaQuestionCircle,
  'puzzle-piece': FaPuzzlePiece,
  'book': FaBook,
  'search': FaSearch,
  'comments': FaComments,
  'shield': FaShieldAlt,
  'file': FaFileAlt,
  'key': FaKey,
  'star': FaStar,
  'edit': FaEdit,
  'volume': FaVolumeUp,
  'dna': FaDna,
  'hospital': FaHospital,
  'dollar': FaDollarSign,
  'network': FaNetworkWired,
  'newspaper': FaNewspaper,
  'clipboard': FaClipboardList,
  'graduation': FaGraduationCap,
  'flask': FaFlask,
  'brain': FaBrain,
  'chevron-right': FaChevronRight,
  'youtube': FaYoutube,
  'external-link': FaExternalLinkAlt,
};

export function NlpIcon({ name, size = 16, style = {}, className = '' }) {
  const IconComponent = nlpIconMap[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} style={style} className={className} />;
}
