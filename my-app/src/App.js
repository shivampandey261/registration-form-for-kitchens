import React, { useState } from 'react';
import "./App.css";

function KitchenRegistrationForm() {
    const [formData, setFormData] = useState({
        kitchenName: '',
        ownerName: '',
        contactNumber: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        website: '',
        socialMedia: {
            instagram: '',
            facebook: '',
            twitter: '',
        },
        cuisineType: '',
        isVegetarian: false,
        operatingHours: {
            mondayToFriday: '',
            saturday: '',
            sunday: '',
        },
        deliveryRange: '',
        preparationTime: '',
        certifications: {
            foodSafety: false,
            healthDepartment: false,
        },
        bankDetails: {
            bankName: '',
            accountHolderName: '',
            accountNumber: '',
            ifscCode: '',
        },
        paymentMethods: [],
        menuFile: null,
        specialtyDishes: ['', '', ''],
        averagePricePerDish: '',
        discounts: '',
        kitchenType: '',
        equipment: '',
        dailyCapacity: '',
        specialPractices: '',
        staffCount: '',
        chefNames: '',
        staffTrained: false,
        hasDeliveryTeam: false,
        termsAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({ ...formData, [name]: checked });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Kitchen Registration Form</h1>

            <h2>1. Kitchen Information</h2>
            <input type="text" name="kitchenName" placeholder="Kitchen Name" onChange={handleChange} />
            <input type="text" name="ownerName" placeholder="Owner's Name" onChange={handleChange} />
            <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
            <input type="text" name="address" placeholder="Street Address" onChange={handleChange} />
            <input type="text" name="city" placeholder="City" onChange={handleChange} />
            <input type="text" name="state" placeholder="State/Province" onChange={handleChange} />
            <input type="text" name="zipCode" placeholder="Zip Code" onChange={handleChange} />
            <input type="text" name="country" placeholder="Country" onChange={handleChange} />
            <input type="url" name="website" placeholder="Website (if any)" onChange={handleChange} />

            <h3>Social Media Links</h3>
            <input type="text" name="socialMedia.instagram" placeholder="Instagram" onChange={handleChange} />
            <input type="text" name="socialMedia.facebook" placeholder="Facebook" onChange={handleChange} />
            <input type="text" name="socialMedia.twitter" placeholder="Twitter" onChange={handleChange} />

            <h2>2. Operational Details</h2>
            <input type="text" name="cuisineType" placeholder="Type of Cuisine" onChange={handleChange} />
            <label>
                <input type="checkbox" name="isVegetarian" onChange={handleCheckboxChange} />
                Are you a Vegetarian/Vegan Kitchen?
            </label>
            <h3>Operating Hours</h3>
            <input type="text" name="operatingHours.mondayToFriday" placeholder="Monday to Friday" onChange={handleChange} />
            <input type="text" name="operatingHours.saturday" placeholder="Saturday" onChange={handleChange} />
            <input type="text" name="operatingHours.sunday" placeholder="Sunday" onChange={handleChange} />
            <input type="text" name="deliveryRange" placeholder="Delivery Range (in km/miles)" onChange={handleChange} />
            <input type="text" name="preparationTime" placeholder="Average Order Preparation Time" onChange={handleChange} />

            <h2>3. Certifications and Licenses</h2>
            <label>
                <input type="checkbox" name="certifications.foodSafety" onChange={handleCheckboxChange} />
                Food Safety Certification
            </label>
            <label>
                <input type="checkbox" name="certifications.healthDepartment" onChange={handleCheckboxChange} />
                Health Department License
            </label>
            <input type="file" name="certificationsFile" onChange={handleFileChange} />

            <h2>4. Payment Details</h2>
            <input type="text" name="bankDetails.bankName" placeholder="Bank Name" onChange={handleChange} />
            <input type="text" name="bankDetails.accountHolderName" placeholder="Account Holder's Name" onChange={handleChange} />
            <input type="text" name="bankDetails.accountNumber" placeholder="Account Number" onChange={handleChange} />
            <input type="text" name="bankDetails.ifscCode" placeholder="IFSC Code / SWIFT Code" onChange={handleChange} />
            
            <h2>5. Menu and Pricing</h2>
            <input type="file" name="menuFile" onChange={handleFileChange} />
            <input type="text" name="specialtyDishes[0]" placeholder="Specialty Dish 1" onChange={handleChange} />
            <input type="text" name="specialtyDishes[1]" placeholder="Specialty Dish 2" onChange={handleChange} />
            <input type="text" name="specialtyDishes[2]" placeholder="Specialty Dish 3" onChange={handleChange} />
            <input type="text" name="averagePricePerDish" placeholder="Average Price per Dish" onChange={handleChange} />
            <input type="text" name="discounts" placeholder="Discounts or Offers (if any)" onChange={handleChange} />

            <h2>6. Kitchen Facilities and Equipment</h2>
            <input type="text" name="kitchenType" placeholder="Type of Kitchen" onChange={handleChange} />
            <input type="text" name="equipment" placeholder="Available Equipment" onChange={handleChange} />
            <input type="text" name="dailyCapacity" placeholder="Maximum Daily Capacity (in terms of orders)" onChange={handleChange} />
            <input type="text" name="specialPractices" placeholder="Do you follow any special cooking practices?" onChange={handleChange} />

            <h2>7. Staff Details</h2>
            <input type="text" name="staffCount" placeholder="Number of Staff Members" onChange={handleChange} />
            <input type="text" name="chefNames" placeholder="Chef's Name(s)" onChange={handleChange} />
            <label>
                <input type="checkbox" name="staffTrained" onChange={handleCheckboxChange} />
                Are the staff trained in food safety?
            </label>
            <label>
                <input type="checkbox" name="hasDeliveryTeam" onChange={handleCheckboxChange} />
                Is there a dedicated delivery team?
            </label>

            <h2>8. Terms and Conditions</h2>
            <label>
                <input type="checkbox" name="termsAccepted" onChange={handleCheckboxChange} />
                I agree to the terms and conditions of the food servicing app.
            </label>

            <button type="submit">Submit</button>
        </form>
    );
}

export default KitchenRegistrationForm;

