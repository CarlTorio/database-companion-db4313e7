import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle, Calendar, Clock, User, Mail, Phone, MapPin, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format } from "date-fns";

interface BookingDetails {
  name: string;
  email: string;
  contactNumber: string;
  membership: string;
  date: string;
  time: string;
  message?: string;
}

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingDetails = location.state as BookingDetails | null;

  useEffect(() => {
    // If no booking details, redirect to home
    if (!bookingDetails) {
      navigate("/");
    }
  }, [bookingDetails, navigate]);

  if (!bookingDetails) {
    return null;
  }

  const formattedDate = bookingDetails.date 
    ? format(new Date(bookingDetails.date), "EEEE, MMMM d, yyyy")
    : "";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            {/* Success Icon and Message */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6"
              >
                <CheckCircle className="w-14 h-14 text-primary" />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-4xl md:text-5xl text-foreground mb-4"
              >
                Thank You!
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-foreground/70 text-lg"
              >
                Your consultation has been successfully booked. We look forward to seeing you!
              </motion.p>
            </div>

            {/* Booking Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-primary rounded-2xl p-8 md:p-10 shadow-elevated mb-8"
            >
              <h2 className="font-display text-2xl text-primary-foreground mb-6 text-center">
                Your Booking Details
              </h2>
              
              <div className="space-y-5">
                {/* Date and Time - Highlighted */}
                <div className="bg-primary-foreground/10 rounded-xl p-5 mb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/70 text-sm">Date</p>
                      <p className="text-primary-foreground font-semibold text-lg">{formattedDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <Clock className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/70 text-sm">Time</p>
                      <p className="text-primary-foreground font-semibold text-lg">{bookingDetails.time}</p>
                    </div>
                  </div>
                </div>

                {/* Other Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary-foreground/70" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/60 text-xs">Name</p>
                      <p className="text-primary-foreground font-medium">{bookingDetails.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground/70" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/60 text-xs">Email</p>
                      <p className="text-primary-foreground font-medium">{bookingDetails.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground/70" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/60 text-xs">Contact</p>
                      <p className="text-primary-foreground font-medium">{bookingDetails.contactNumber}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground/70" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/60 text-xs">Membership</p>
                      <p className="text-primary-foreground font-medium">{bookingDetails.membership}</p>
                    </div>
                  </div>
                </div>

                {bookingDetails.message && (
                  <div className="border-t border-primary-foreground/20 pt-4 mt-4">
                    <p className="text-primary-foreground/60 text-xs mb-1">Your Message</p>
                    <p className="text-primary-foreground/90 text-sm italic">"{bookingDetails.message}"</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Reminder Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-muted rounded-xl p-6 mb-8 text-center"
            >
              <p className="text-foreground font-medium mb-2">
                📋 Please save these details!
              </p>
              <p className="text-foreground/70 text-sm">
                A confirmation will be sent to your email. Please arrive 10 minutes before your scheduled time.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => navigate("/book-consultation")}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Book Another
              </Button>
              <Button
                onClick={() => navigate("/")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
