import style from '../../css/inquiry.module.css'
import React, { useState } from 'react';

function Inquiry() {
  const Inquiry_Purpose_OPtion = ['Select inquiry Purpose', 'Minar', 'Dealer', 'Distributor', 'Tender', 'Export / import', 'Other']
  const Contry_Option = ['Select Country', 'Afghanistan', 'Aland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belau', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bonaire,saint Eustatius and Saba', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei',
    'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cuba', 'Curacao', 'Cyprus', 'Czech Republic of the Congo (Kinshasa)', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France',
    'French Guiana', 'French polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard Island and Mcdonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos',
    'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuani', 'Luxembourg', 'Macao S.A.R. , China', 'Macedonia', 'Madagascar', 'MAlawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlad', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island ', 'North Korea', 'Northern Mariana Islands',
    'Norway', 'Oman', 'Oman', 'Pakistan', 'Palestinian Territory', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rice', ' qatar', 'Republic of the Congo (Brazzaille)', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin (Dutch Part)', 'Saint MArtin (French Part)', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San MArino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone',
    'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Afri', 'South Georgia/Sandwith Islands', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobado', 'Tunisia', 'Turkey', 'Turkmenisttan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom (UK)', 'United States (US)',
    'United States (US) Minor Outlying Islands', 'United State (US) Virgin Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican', 'Venzuela', 'Vietnum', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe']


  const [CheckNumber, setCheckNumber] = useState(false)
  const [checkOption, setCheckOption] = useState(false);
  const [InputNumber, setInputNumber] = useState('')
  const [selectedInquiryOption, setSelectedInquiryOption] = useState('Select inquiry Purpose');
  const [secssageMassage, setSecssageMassage] = useState('')
  const HendelSubmit = (e) => {
    e.preventDefault();
    console.log(selectedInquiryOption);


    if (InputNumber === '' && selectedInquiryOption === 'Select inquiry Purpose') {
      setCheckNumber(true)
      setCheckOption(true)
    }
    else if (InputNumber === '') {
      setCheckNumber(true)
    }
    else if (selectedInquiryOption === 'Select inquiry Purpose') {
      setCheckOption(true)
    }
    else {
      setSecssageMassage(true)
      setCheckNumber(false)
      setCheckOption(false)
      setInputNumber("")
      setSelectedInquiryOption("Select inquiry Purpose");

    }

  }
  return (

    <div className='max-width'>
      {!secssageMassage ?
        <form className={`${style.form} animate__zoomIn animate__animated`} onSubmit={(e) => HendelSubmit(e)}>
          <div className={style.form_section}>
            <div>
              <span> Full Name</span> <br />
              <input type="text" placeholder='Full Name' />
            </div>

            <div>

              Email
              <input type="text" placeholder='Email Address' />
            </div>
            <div>
              Mobile Number<span style={{ color: "red" }}>*</span>
              <input
                type="number"
                placeholder='Mobile Number'
                value={InputNumber}
                style={{ border: CheckNumber ? '1px solid red' : null }}
                onChange={(e) => {
                  setInputNumber(e.target.value)
                  setCheckNumber(false)

                }}
              />
            </div>
            {CheckNumber ? <p style={{ color: "red", fontSize: "13px", marginLeft: "10px" }}> Please Enter Mobile Number</p> : null}
            <div>
              Inquiry Purpose<span style={{ color: "red" }}>*</span>
              <select
                style={{ border: checkOption ? '1px solid red' : null }}
                onChange={(e) => {
                  setSelectedInquiryOption(e.target.value)
                  setCheckOption(false)

                }}
              >
                {Inquiry_Purpose_OPtion.map((option, idx) => {
                  return (
                    <option key={idx}>{option}</option>
                  )
                })}
              </select>

            </div>
            {checkOption ? <p style={{ color: "red", fontSize: "13px", marginLeft: "10px" }}>Please Select Perpose of Inquiry</p> : null}
            <h4 >Address</h4>
            <div className={`${style.form_contain} flex`}>
              <div >
                Address Line 1
                <input type="text" placeholder='Address Line 1 ' />
              </div>
              <div>
                City
                <input type="text" placeholder='City' />
              </div>
            </div>
            <div className={`${style.form_contain} flex`}>
              <div>
                State
                <input type="text" placeholder='State' />
              </div>

              <div>
                Zip Code
                <input type="text" placeholder='Zip' />
              </div>
            </div>


            <div>
              Country
              <select

              >
                {Contry_Option.map((contry, idx) => {
                  return (
                    <option key={idx}>{contry}</option>
                  )
                })}
              </select>
            </div>
            <button type='submit'>Submit From</button>
          </div>
        </form>
        : <div className={style.seccsegeMassage}> ✅  Thank you for your message. We will get in touch with you shortly</div>
      }
    </div>
  )
}

export default Inquiry