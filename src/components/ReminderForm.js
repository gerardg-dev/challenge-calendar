import React, { useState } from "react";

import "../styles/main.scss";

const ReminderForm = ({
  formTitle,
  day,
  month,
  year,
  hour,
  minute,
  textarea,
  city,
  state,
  zipcode,
  country,
  color,
  onReturnFormData
}) => {
  const [formData, setFormData] = useState({
    formTitle,
    day,
    month,
    year,
    hour,
    minute,
    textarea,
    city,
    state,
    zipcode,
    country,
    color
  });

  const handleChange = e => {
    const inputName = e.target.mame;
    let inputValue = e.target.value;

    setFormData({
      ...formData,
      ...{
        [e.target.getAttribute("name")]: inputValue
      }
    });
  };

  const onSubmit = () => {
    console.log(formData);
    if (
      formData.day === undefined ||
      formData.month === undefined ||
      formData.year === undefined ||
      formData.hour === undefined ||
      formData.minute === undefined ||
      formData.textarea === undefined ||
      formData.city === undefined ||
      formData.state === undefined ||
      formData.zipcode === undefined ||
      formData.country === undefined ||
      formData.color === undefined ||
      //
      formData.day.length === 0 ||
      formData.month.length === 0 ||
      formData.year.length === 0 ||
      formData.hour.length === 0 ||
      formData.minute.length === 0 ||
      formData.textarea.length === 0 ||
      formData.city.length === 0 ||
      formData.state.length === 0 ||
      formData.zipcode.length === 0 ||
      formData.country.length === 0 ||
      formData.color.length === 0
    ) {
      alert("Please fill all the inputs.");
    } else {
      // alert(JSON.stringify(formData, null, 4));
      onReturnFormData(formData);
    }
  };

  return (
    <form className="reminder-form-component__container">
      <label className="reminder-form-component__text--title">
        {formTitle}
      </label>
      <div className="reminder-form-component__container--horizontal reminder-form-component__container--y-item">
        <div className="reminder-form-component__container--vertical reminder-form-component__container--x-item">
          <label htmlFor="day" className="reminder-form-component__label">
            Day
          </label>
          <select
            id="day"
            name="day"
            onChange={handleChange}
            value={formData.day}
            className="reminder-form-component__select"
          >
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
        </div>
        <div className="reminder-form-component__container--vertical reminder-form-component__container--x-item">
          <label htmlFor="month" className="reminder-form-component__label">
            Month
          </label>
          <select
            id="month"
            name="month"
            onChange={handleChange}
            value={formData.month}
            className="reminder-form-component__select"
          >
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div className="reminder-form-component__container--vertical">
          <label htmlFor="year" className="reminder-form-component__label">
            Year
          </label>
          <select
            id="year"
            name="year"
            onChange={handleChange}
            value={formData.year}
            className="reminder-form-component__select"
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
        </div>
      </div>

      <div className="reminder-form-component__container--horizontal reminder-form-component__container--y-item">
        <div className="reminder-form-component__container--vertical reminder-form-component__container--x-item">
          <label htmlFor="hour" className="reminder-form-component__label">
            Hour
          </label>
          <select
            id="hour"
            name="hour"
            onChange={handleChange}
            value={formData.hour}
            className="reminder-form-component__select"
          >
            <option value="00">00</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
          </select>
        </div>
        <div className="reminder-form-component__container--vertical">
          <label htmlFor="minute" className="reminder-form-component__label">
            Minute
          </label>
          <select
            id="minute"
            name="minute"
            onChange={handleChange}
            value={formData.minute}
            className="reminder-form-component__select"
          >
            <option value="00">00</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
            <option value="49">49</option>
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="52">52</option>
            <option value="53">53</option>
            <option value="54">54</option>
            <option value="55">55</option>
            <option value="56">56</option>
            <option value="57">57</option>
            <option value="58">58</option>
            <option value="59">59</option>
          </select>
        </div>
      </div>

      <div className="reminder-form-component__container--vertical reminder-form-component__container--y-item">
        <textarea
          name="textarea"
          placeholder="Remind me to..."
          value={formData.textarea}
          className="reminder-form-component__textarea"
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="reminder-form-component__container--vertical reminder-form-component__container--y-item">
        <label htmlFor="textarea" className="reminder-form-component__label">
          Select color
        </label>
        <select
          id="color"
          name="color"
          onChange={handleChange}
          value={formData.color}
          className={`reminder-form-component__select reminder-form-component__select--${formData.color}`}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
          <option value="pink">Pink</option>
          <option value="purple">Purple</option>
        </select>
      </div>

      <div className="reminder-form-component__container--horizontal reminder-form-component__container--y-item">
        <div className="reminder-form-component__container--vertical reminder-form-component__container--x-item">
          <label htmlFor="city" className="reminder-form-component__label">
            City
          </label>
          <input
            name="city"
            value={formData.city}
            className="reminder-form-component__input reminder-form-component__input--location"
            onChange={handleChange}
          />
        </div>
        <div className="reminder-form-component__container--vertical">
          <label htmlFor="state" className="reminder-form-component__label">
            State
          </label>
          <input
            name="state"
            value={formData.state}
            className="reminder-form-component__input reminder-form-component__input--location"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="reminder-form-component__container--horizontal reminder-form-component__container--y-item">
        <div className="reminder-form-component__container--vertical reminder-form-component__container--x-item">
          <label htmlFor="zipcode" className="reminder-form-component__label">
            ZIP Code
          </label>
          <input
            name="zipcode"
            value={formData.zipcode}
            className="reminder-form-component__input reminder-form-component__input--location"
            onChange={handleChange}
          />
        </div>
        <div className="reminder-form-component__container--vertical">
          <label htmlFor="country" className="reminder-form-component__label">
            Country
          </label>
          <input
            name="country"
            value={formData.country}
            className="reminder-form-component__input reminder-form-component__input--location"
            onChange={handleChange}
          />
        </div>
      </div>

      <button
        type="submit"
        className="reminder-form-component__button reminder-form-component__container--y-item"
        onClick={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        SAVE
      </button>
    </form>
  );
};

export default ReminderForm;

ReminderForm.defaultProps = {
  formTitle: "REMINDER FORM",
  day: "01",
  month: "01",
  year: "2021",
  hour: "12",
  minute: "00",
  textarea: "",
  city: "",
  state: "",
  zipcode: "",
  country: "",
  color: "orange",
  onReturnFormData: () => console.log("Returning Form Data to Parent")
};
