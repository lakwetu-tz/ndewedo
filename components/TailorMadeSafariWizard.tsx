"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, Check, X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

interface TailorMadeSafariWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TailorMadeSafariWizard({
  isOpen,
  onClose,
}: TailorMadeSafariWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    countries: [] as string[],
    parks: [] as string[],
    activities: [] as string[],
    duration: "",
    startDate: "",
    budget: "",
    fullName: "",
    email: "",
    phone: "",
    additionalInfo: "",
  });

  if (!isOpen) return null;

  const totalSteps = 6;

  const countries = [
    "Tanzania",
    "Kenya",
    "Uganda",
    "Rwanda",
    "Botswana",
    "South Africa",
    "Namibia",
    "Zimbabwe",
  ];

  const parks = [
    "Serengeti National Park",
    "Ngorongoro Crater",
    "Tarangire National Park",
    "Lake Manyara National Park",
    "Ruaha National Park",
    "Selous Game Reserve",
    "Mikumi National Park",
    "Arusha National Park",
  ];

  const activities = [
    "Game Drives",
    "Walking Safaris",
    "Hot Air Balloon Safari",
    "Bird Watching",
    "Photography Safari",
    "Cultural Tours",
    "Night Game Drives",
    "Bush Dining",
    "Camping",
    "Luxury Lodge Stays",
  ];

  const handleToggleSelection = (
    category: "countries" | "parks" | "activities",
    item: string
  ) => {
    setFormData((prev) => {
      const currentList = prev[category];
      if (currentList.includes(item)) {
        return { ...prev, [category]: currentList.filter((i) => i !== item) };
      } else {
        return { ...prev, [category]: [...currentList, item] };
      }
    });
  };

  const handleNext = () => {
    if (currentStep === 1 && formData.countries.length === 0) {
      toast.error("Please select at least one country");
      return;
    }
    if (currentStep === 2 && formData.parks.length === 0) {
      toast.error("Please select at least one national park");
      return;
    }
    if (currentStep === 3 && formData.activities.length === 0) {
      toast.error("Please select at least one activity");
      return;
    }
    if (currentStep === 4 && (!formData.duration || !formData.startDate)) {
      toast.error("Please select duration and start date");
      return;
    }
    if (currentStep === 5 && !formData.budget) {
      toast.error("Please select your budget range");
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://gilleadsafaris.com/backend/tailor_made.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success(
          data.message || "Your tailor-made safari request has been submitted!"
        );
        onClose();
        setFormData({
          countries: [],
          parks: [],
          activities: [],
          duration: "",
          startDate: "",
          budget: "",
          fullName: "",
          email: "",
          phone: "",
          additionalInfo: "",
        });
        setCurrentStep(1);
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Wizard error:", error);
      toast.error("Failed to connect to the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-[22px] text-white mb-4 font-semibold font-serif">
              Which countries would you like to visit?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {countries.map((country) => (
                <motion.button
                  key={country}
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => handleToggleSelection("countries", country)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-3 rounded-[10px] text-[15px] border-2 transition-all flex items-center justify-center gap-2 ${
                    formData.countries.includes(country)
                      ? "bg-[#c97500] text-white border-[#c97500]"
                      : "bg-white/5 text-white border-white/20 hover:border-[#c97500]"
                  }`}
                >
                  {formData.countries.includes(country) && <Check size={16} />}
                  {country}
                </motion.button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-[22px] text-white mb-4 font-semibold font-serif">
              Select National Parks to Visit
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {parks.map((park) => (
                <motion.button
                  key={park}
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => handleToggleSelection("parks", park)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-3 rounded-[10px] text-[15px] border-2 transition-all text-left flex items-center gap-2 ${
                    formData.parks.includes(park)
                      ? "bg-[#c97500] text-white border-[#c97500]"
                      : "bg-white/5 text-white border-white/20 hover:border-[#c97500]"
                  }`}
                >
                  {formData.parks.includes(park) && <Check size={16} />}
                  {park}
                </motion.button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-[22px] text-white mb-4 font-semibold font-serif">
              What activities interest you?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {activities.map((activity) => (
                <motion.button
                  key={activity}
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => handleToggleSelection("activities", activity)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-3 rounded-[10px] text-[15px] border-2 transition-all flex items-center justify-center gap-2 ${
                    formData.activities.includes(activity)
                      ? "bg-[#c97500] text-white border-[#c97500]"
                      : "bg-white/5 text-white border-white/20 hover:border-[#c97500]"
                  }`}
                >
                  {formData.activities.includes(activity) && <Check size={16} />}
                  {activity}
                </motion.button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-[22px] text-white mb-4 font-semibold font-serif">
              Duration & Start Date
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-[15px] text-white/90 mb-2">
                  How many days? <span className="text-[#c97500]">*</span>
                </label>
                <select
                  required
                  disabled={isSubmitting}
                  value={formData.duration}
                  onChange={(e) =>
                    setFormData({ ...formData, duration: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-white/20 rounded-[10px] text-[15px] focus:outline-none focus:border-[#c97500] bg-white/5 text-white"
                >
                  <option value="" className="text-black">
                    Select duration
                  </option>
                  <option value="3-5" className="text-black">
                    3-5 days
                  </option>
                  <option value="6-8" className="text-black">
                    6-8 days
                  </option>
                  <option value="9-12" className="text-black">
                    9-12 days
                  </option>
                  <option value="13-15" className="text-black">
                    13-15 days
                  </option>
                  <option value="16+" className="text-black">
                    16+ days
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-[15px] text-white/90 mb-2">
                  Preferred Start Date{" "}
                  <span className="text-[#c97500]">*</span>
                </label>
                <input
                  type="date"
                  required
                  disabled={isSubmitting}
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-white/20 rounded-[10px] text-[15px] focus:outline-none focus:border-[#c97500] bg-white/5 text-white"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-[22px] text-white mb-4 font-semibold font-serif">
              What&apos;s your budget?
            </h3>
            <div className="space-y-3">
              {[
                {
                  label: "Budget-Friendly (Under $1,500 per person)",
                  value: "budget",
                },
                {
                  label: "Mid-Range ($1,500 - $3,000 per person)",
                  value: "mid-range",
                },
                {
                  label: "Luxury ($3,000 - $5,000 per person)",
                  value: "luxury",
                },
                {
                  label: "Ultra-Luxury ($5,000+ per person)",
                  value: "ultra-luxury",
                },
                { label: "I'm flexible", value: "flexible" },
              ].map((option) => (
                <motion.button
                  key={option.value}
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setFormData({ ...formData, budget: option.value })}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full px-6 py-4 rounded-[10px] text-[15px] border-2 transition-all text-left flex items-center gap-3 ${
                    formData.budget === option.value
                      ? "bg-[#c97500] text-white border-[#c97500]"
                      : "bg-white/5 text-white border-white/20 hover:border-[#c97500]"
                  }`}
                >
                  {formData.budget === option.value && <Check size={18} />}
                  {option.label}
                </motion.button>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <h3 className="text-[22px] text-white mb-4 font-semibold font-serif">
              Your Contact Details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-[15px] text-white/90 mb-2">
                  Full Name <span className="text-[#c97500]">*</span>
                </label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-white/20 rounded-[10px] text-[15px] focus:outline-none focus:border-[#c97500] bg-white/5 text-white placeholder-white/50"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-[15px] text-white/90 mb-2">
                  Email <span className="text-[#c97500]">*</span>
                </label>
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-white/20 rounded-[10px] text-[15px] focus:outline-none focus:border-[#c97500] bg-white/5 text-white placeholder-white/50"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-[15px] text-white/90 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  disabled={isSubmitting}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-white/20 rounded-[10px] text-[15px] focus:outline-none focus:border-[#c97500] bg-white/5 text-white placeholder-white/50"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-[15px] text-white/90 mb-2">
                  Additional Information
                </label>
                <textarea
                  rows={4}
                  disabled={isSubmitting}
                  value={formData.additionalInfo}
                  onChange={(e) =>
                    setFormData({ ...formData, additionalInfo: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-white/20 rounded-[10px] text-[15px] focus:outline-none focus:border-[#c97500] bg-white/5 text-white placeholder-white/50"
                  placeholder="Any special requests?"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const stepTitles = [
    "Select Countries",
    "Select Parks",
    "Select Activities",
    "Duration & Date",
    "Budget",
    "Contact Details",
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-[#0f440f] rounded-[25px] max-w-[800px] w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-[#0f440f] border-b border-white/10 px-8 py-6 flex items-center justify-between">
            <div>
              <h2 className="text-[26px] text-white font-bold font-serif">
                Build Your Custom Safari
              </h2>
              <p className="text-[14px] text-white/60 mt-1">
                {stepTitles[currentStep - 1]} • Step {currentStep} of {totalSteps}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={24} className="text-white" />
            </motion.button>
          </div>

          <div className="px-8 py-3 bg-[#0f440f]/50">
            <div className="w-full bg-white/10 rounded-full h-1.5">
              <motion.div
                className="bg-[#c97500] h-1.5 rounded-full transition-all duration-500"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-8 py-8">
            <form onSubmit={handleSubmit}>{renderStep()}</form>
          </div>

          <div className="px-8 py-6 border-t border-white/10 bg-[#0f440f]/80">
            <div className="flex items-center justify-between">
              <motion.button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 1 || isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white hover:bg-white/10 transition-colors disabled:opacity-30"
              >
                <ChevronLeft size={20} />
                Previous
              </motion.button>

              {currentStep < totalSteps ? (
                <motion.button
                  type="button"
                  onClick={handleNext}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#c97500] text-white font-semibold hover:bg-[#b36800] transition-all shadow-lg"
                >
                  Next Step
                  <ChevronRight size={20} />
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  form="wizard-form"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-10 py-3 rounded-full bg-[#c97500] text-white font-bold hover:bg-[#b36800] transition-all shadow-xl min-w-[200px] justify-center"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <Check size={20} />
                      Finalize Request
                    </>
                  )}
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}