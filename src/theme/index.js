// theme.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import global from './styles'


// Foundational style overrides
import fonts from './foundations/fonts'

/*
import colors from './foundations/colors'
import fontSizes from './foundations/font-sizes'

import shadows from './foundations/shadows'
import sizes from './foundations/sizes'
import textStyles from './foundations/text-styles'
*/
// Component style overrides
/*
import Alert from './components/alert'
import Breadcrumb from './components/breadcrumb'
import BreadcrumbCurrent from './components/breadcumb-current'
import Button from './components/button'
import CategoryLink from './components/category-link'
import Checkbox from './components/checkbox'
import Container from './components/container'
import Divider from './components/divider'
import Drawer from './components/drawer'
import Form from './components/form'
import FormInput from './components/form-input'
import FormLabel from './components/form-label'
import Heading from './components/heading'
import IconNegative from './components/icon-negative'
import IconPositive from './components/icon-positive'
import Input from './components/input'
import Link from './components/link'
import List from './components/list'
import NumberInput from './components/number-input'
import ProductPromotedCard from './components/product-promoted-card'
import ProductSlider from './components/product-slider'
import Radio from './components/radio'
import Select from './components/select'
import StackDivider from './components/stack-divider'
import StoreView from './components/store-view'
import Table from './components/table'
import Tag from './components/tag'
import Textarea from './components/textarea'
*/

export default extendTheme({
  // Global style overrides
  styles: {
    global,
  },
  // Foundational style overrides
  fonts,
  /*
  colors,
  
  fontSizes,
  shadows,
  sizes,
  textStyles,
  */
  // Component style overrides
  /*
  components: {
    Alert,
    Breadcrumb,
    BreadcrumbCurrent,
    Button,
    CategoryLink,
    Checkbox,
    Container,
    Divider,
    Drawer,
    Form,
    FormInput,
    FormLabel,
    Heading,
    IconNegative,
    IconPositive,
    Input,
    Link,
    List,
    NumberInput,
    ProductPromotedCard,
    ProductSlider,
    Radio,
    Select,
    StackDivider,
    StoreView,
    Table,
    Tag,
    Textarea,
  },
  */
})
