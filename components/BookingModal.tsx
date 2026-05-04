"use client";

import { useState, useMemo } from "react";
import { X, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  safariPackage: {
    name: string;
    amount: string;
  } | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  safariPackage,
}: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    language: "",
    country: "",
    paymentMode: "",
    travelDate: "",
    partners: 1,
    children: 0,
  });

  const totalPrice = useMemo(() => {
    if (!safariPackage) return "$0";

    const basePrice =
      parseInt(safariPackage.amount.replace(/[^0-9]/g, "")) || 0;
    const totalPeople = (formData.partners || 0) + (formData.children || 0);

    const calculatedTotal = basePrice * (totalPeople || 1);

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(calculatedTotal);
  }, [safariPackage, formData.partners, formData.children]);

  if (!isOpen || !safariPackage) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.language ||
      !formData.country ||
      !formData.paymentMode
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://gilleadsafaris.com/backend/booking.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          packageName: safariPackage.name,
          packageAmount: totalPrice,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message || `Booking for ${safariPackage.name} successful!`);
        onClose();
        setFormData({
          fullName: "",
          email: "",
          language: "",
          country: "",
          paymentMode: "",
          travelDate: "",
          partners: 1,
          children: 0,
        });
      } else {
        toast.error(data.message || "Failed to submit booking. Please try again.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Connection error. Please check your internet and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:border-[#c97500] disabled:bg-white/5 bg-white/5 text-white placeholder-white/50";
  const labelClasses = "block text-[15px] text-white/90 mb-2";

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
          className="bg-[#0f440f] rounded-[20px] max-w-[600px] w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-[#0f440f] border-b border-white/10 px-6 py-4 flex items-center justify-between rounded-t-[20px] z-10">
            <div>
              <h2 className="text-[24px] text-white font-serif">Book Your Safari</h2>
              <p className="text-[14px] text-white/70 mt-1">{safariPackage.name}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#c97500]/20 px-6 py-4 border-b border-[#c97500]/30 flex justify-between items-center"
          >
            <div className="text-[14px] text-white/70">Total Price (Estimated)</div>
            <div className="text-[28px] font-bold text-[#c97500]">{totalPrice}</div>
          </motion.div>

          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <label className={labelClasses}>
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
                  className={inputClasses}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className={labelClasses}>
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
                  className={inputClasses}
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <label className={labelClasses}>
                  Language <span className="text-[#c97500]">*</span>
                </label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  value={formData.language}
                  onChange={(e) =>
                    setFormData({ ...formData, language: e.target.value })
                  }
                  className={inputClasses}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className={labelClasses}>
                  Country <span className="text-[#c97500]">*</span>
                </label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  className={inputClasses}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <label className={labelClasses}>
                Mode of Payment <span className="text-[#c97500]">*</span>
              </label>
              <select
                required
                disabled={isSubmitting}
                value={formData.paymentMode}
                onChange={(e) =>
                  setFormData({ ...formData, paymentMode: e.target.value })
                }
                className={`${inputClasses} bg-white/10`}
              >
                <option value="" className="text-black">
                  Select Payment Mode
                </option>
                <option value="Credit Card" className="text-black">
                  Credit Card
                </option>
                <option value="PayPal" className="text-black">
                  PayPal
                </option>
                <option value="Bank Transfer" className="text-black">
                  Bank Transfer
                </option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className={labelClasses}>Travel Date</label>
              <input
                type="date"
                disabled={isSubmitting}
                value={formData.travelDate}
                onChange={(e) =>
                  setFormData({ ...formData, travelDate: e.target.value })
                }
                className={inputClasses}
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <label className={labelClasses}>Number of Adults</label>
                <input
                  type="number"
                  min="1"
                  disabled={isSubmitting}
                  value={formData.partners}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      partners: parseInt(e.target.value) || 1,
                    })
                  }
                  className={inputClasses}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className={labelClasses}>Children</label>
                <input
                  type="number"
                  min="0"
                  disabled={isSubmitting}
                  value={formData.children}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      children: parseInt(e.target.value) || 0,
                    })
                  }
                  className={inputClasses}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center justify-end mt-6 pt-6 border-t border-white/10"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#c97500] text-white hover:bg-[#b36800] transition-all disabled:opacity-70 disabled:cursor-not-allowed min-w-[220px] justify-center font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Booking...
                  </>
                ) : (
                  <>
                    <Check size={20} />
                    Confirm Booking ({totalPrice})
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}