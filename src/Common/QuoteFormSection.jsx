import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";

export default function QuoteFormSection({ mode = "quote", title }) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    mobileNumber: "",
    countryName: "",
    gradeQuality: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

      const response = await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          companyName: formData.companyName,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          countryName: formData.countryName,
          gradeQuality: mode === "quote" ? formData.gradeQuality : "",
          subject:
            mode === "contact"
              ? formData.subject || "General enquiry"
              : formData.subject || "Quote enquiry",
          message: formData.message,
          formType: mode === "contact" ? "contact" : "quote"
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send message from server.");
      }

      setSubmitStatus('success');
      
      
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        mobileNumber: "",
        countryName: "",
        gradeQuality: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error("Error submitting form via backend:", error);
      setSubmitStatus("error");
      const friendlyError =
        (error && (error.text || error.message)) ||
        "Unexpected error from email service. Please try again later.";
      setErrorMessage(friendlyError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-8 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            {title || (mode === "contact" ? t('contact:sendMessage', t('form.submitContact')) : t('form.quoteTitle'))}
          </h2>
        </div>

        {}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
            <p className="font-semibold">{t('form.successTitle')}</p>
            <p className="text-sm">{t('form.successDesc')}</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
            <p className="font-semibold">{t('form.errorTitle')}</p>
            <p className="text-sm">
              {errorMessage
                ? errorMessage
                : t('form.errorDesc')}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {}
            <div>
              <input
                type="text"
                name="fullName"
                placeholder={t('form.fullName')}
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-[1.5px] border-black rounded-lg focus:ring-2 focus:ring-[#E99322] focus:border-transparent transition-all duration-300"
                required
                disabled={isSubmitting}
              />
            </div>

            {}
            <div>
              <input
                type="text"
                name="companyName"
                placeholder={t('form.company')}
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-[1.5px] border-black rounded-lg focus:ring-2 focus:ring-[#E99322] focus:border-transparent transition-all duration-300"
                required
                disabled={isSubmitting}
              />
            </div>

            {}
            <div>
              <input
                type="email"
                name="email"
                placeholder={t('form.email')}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-[1.5px] border-black rounded-lg focus:ring-2 focus:ring-[#E99322] focus:border-transparent transition-all duration-300"
                required
                disabled={isSubmitting}
              />
            </div>

            {}
            <div>
              <input
                type="tel"
                name="mobileNumber"
                placeholder={t('form.mobile')}
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border-[1.5px] border-black rounded-lg focus:ring-2 focus:ring-[#E99322] focus:border-transparent transition-all duration-300"
                required
                disabled={isSubmitting}
              />
            </div>

            {}
            <div>
              <input
                type="text"
                name="countryName"
                placeholder={t('form.country')}
                value={formData.countryName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-[1.5px] border-black rounded-lg focus:ring-2 focus:ring-[#E99322] focus:border-transparent transition-all duration-300"
                required
                disabled={isSubmitting}
              />
            </div>

            {}
            {mode === "contact" ? (
              <div>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-[1.5px] border-black rounded-lg focus:ring-2 focus:ring-[#E99322] focus:border-transparent transition-all duration-300"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">{t('form.subject')}</option>
                  <option value="General enquiry">General enquiry</option>
                  <option value="Sales">Sales</option>
                  <option value="Support">Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Quality inquiry">Quality inquiry</option>
                </select>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  name="gradeQuality"
                  placeholder={t('form.grade')}
                  value={formData.gradeQuality}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-[1.5px] border-black rounded-lg focus:ring-2 focus:ring-[#E99322] focus:border-transparent transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
            )}
          </div>

          {}
          <div className="mb-8">
            <textarea
              name="message"
              placeholder={t('form.message')}
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border-[1.5px] border-black rounded-lg focus:ring-2 focus:ring-[#E99322] focus:border-transparent transition-all duration-300 resize-none"
              required
              disabled={isSubmitting}
            />
          </div>

          {}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-4 rounded-lg transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl flex items-center justify-center mx-auto ${
                isSubmitting 
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                  : 'bg-[#E99322] text-white hover:bg-[#E99322]/90'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  {t('form.submitting')}
                </>
              ) : (
                <>
                  {mode === "contact" ? t('form.submitContact') : t('form.submitQuote')}
                  <FiArrowRight className="ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}