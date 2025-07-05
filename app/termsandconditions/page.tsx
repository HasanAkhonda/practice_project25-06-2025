import CookiePolicy from '@/components/termsAndConditioins/CookiePolicy'
import PrivacyPolicy from '@/components/termsAndConditioins/PrivacyPolicy'
import TermsDrivers from '@/components/termsAndConditioins/TermsDrivers'
import TermsGarages from '@/components/termsAndConditioins/TermsGarages'
import React from 'react'

const page = () => {
    return (
        <div >
            {/* <TermsDrivers/>
            <TermsGarages/> */}
            {/* <CookiePolicy/> */}
            <PrivacyPolicy/>
        </div>
    )
}

export default page
