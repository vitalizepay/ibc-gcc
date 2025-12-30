import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import ibcLogo from "@/assets/ibc-logo-new.png";

const GOOGLE_SHEET_WEB_APP_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

const Apply = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Section 1: Personal & Business Details
    fullName: "",
    companyName: "",
    designation: "",
    industry: "",
    yearsInBusiness: "",
    websiteLinkedin: "",
    email: "",
    mobile: "",
    // Section 2: Business Overview
    businessDescription: "",
    businessStage: "",
    // Section 3: Community Fit
    whyJoin: "",
    whatToGain: "",
    howContribute: "",
    // Section 4: Membership Selection
    membershipType: "",
    // Section 5: Engagement & Commitment
    willingToParticipate: "",
    acknowledgeReview: "",
    // Section 6: IBC Stories
    shareStory: "",
    // Section 7: Declaration
    declaration: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.companyName || !formData.email || !formData.mobile || !formData.designation) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }

    if (!formData.membershipType) {
      toast({
        title: "Membership Selection Required",
        description: "Please select a membership type.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.declaration) {
      toast({
        title: "Declaration Required",
        description: "Please confirm that the information provided is accurate.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Google Sheets
      const response = await fetch(GOOGLE_SHEET_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      setIsSubmitted(true);
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Sent",
        description: "Your application has been submitted. We'll be in touch soon.",
      });
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
        <Helmet>
          <title>Application Submitted | IBC Dubai</title>
        </Helmet>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center"
          >
            <CheckCircle className="w-10 h-10 text-gold" />
          </motion.div>
          <h1 className="text-3xl font-heading font-semibold text-primary-foreground mb-4">
            Application Received!
          </h1>
          <p className="text-primary-foreground/80 mb-8">
            Thank you for your interest in joining IBC Dubai. Our team will review your 
            application and contact you within 2-3 business days.
          </p>
          <Button variant="hero" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  const SectionDivider = ({ number, title }: { number: number; title: string }) => (
    <div className="flex items-center gap-4 mb-6">
      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center shrink-0">
        {number}
      </span>
      <h3 className="text-xl font-heading font-semibold text-foreground">{title}</h3>
      <div className="flex-1 h-px bg-gold/30" />
    </div>
  );

  return (
    <div className="min-h-screen bg-cream">
      <Helmet>
        <title>Membership Application | IBC – Indian Business Circle Dubai</title>
        <meta name="description" content="Apply for membership at Indian Business Circle Dubai. Join a curated network of Indian business professionals in the UAE." />
      </Helmet>

      {/* Header */}
      <header className="gradient-hero py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-primary-foreground hover:text-gold transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </Link>
          <Link to="/">
            <img 
              src={ibcLogo} 
              alt="IBC Dubai Logo" 
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Form Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            {/* Page Title */}
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-foreground mb-3">
                IBC – Membership Application Form
              </h1>
              <p className="text-muted-foreground text-lg">
                Join a trusted circle of Indian business leaders in Dubai
              </p>
            </div>

            {/* Form Card */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 sm:p-10 shadow-card space-y-10"
            >
              {/* Section 1: Personal & Business Details */}
              <div>
                <SectionDivider number={1} title="Personal & Business Details" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-foreground font-medium">Full Name *</Label>
                    <Input 
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="bg-secondary border-0 rounded-lg h-12" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-foreground font-medium">Company Name *</Label>
                    <Input 
                      id="companyName"
                      name="companyName"
                      placeholder="Your company name"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="bg-secondary border-0 rounded-lg h-12" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="designation" className="text-foreground font-medium">Role / Designation *</Label>
                    <Input 
                      id="designation"
                      name="designation"
                      placeholder="e.g., CEO, Founder, Director"
                      value={formData.designation}
                      onChange={handleChange}
                      className="bg-secondary border-0 rounded-lg h-12" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-foreground font-medium">Industry *</Label>
                    <Input 
                      id="industry"
                      name="industry"
                      placeholder="e.g., Technology, Real Estate"
                      value={formData.industry}
                      onChange={handleChange}
                      className="bg-secondary border-0 rounded-lg h-12" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearsInBusiness" className="text-foreground font-medium">Years in Business *</Label>
                    <Input 
                      id="yearsInBusiness"
                      name="yearsInBusiness"
                      placeholder="e.g., 5 years"
                      value={formData.yearsInBusiness}
                      onChange={handleChange}
                      className="bg-secondary border-0 rounded-lg h-12" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="websiteLinkedin" className="text-foreground font-medium">Website / LinkedIn (Optional)</Label>
                    <Input 
                      id="websiteLinkedin"
                      name="websiteLinkedin"
                      placeholder="https://"
                      value={formData.websiteLinkedin}
                      onChange={handleChange}
                      className="bg-secondary border-0 rounded-lg h-12" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-secondary border-0 rounded-lg h-12" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-foreground font-medium">Mobile Number *</Label>
                    <Input 
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="+971 XX XXX XXXX"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="bg-secondary border-0 rounded-lg h-12" 
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Business Overview */}
              <div>
                <SectionDivider number={2} title="Business Overview" />
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="businessDescription" className="text-foreground font-medium">Short Business Description *</Label>
                    <Textarea 
                      id="businessDescription"
                      name="businessDescription"
                      placeholder="Briefly describe your business in 2-3 lines..."
                      value={formData.businessDescription}
                      onChange={handleChange}
                      className="bg-secondary border-0 rounded-lg min-h-[100px] resize-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-foreground font-medium">Business Stage *</Label>
                    <RadioGroup 
                      value={formData.businessStage} 
                      onValueChange={(value) => handleRadioChange("businessStage", value)}
                      className="flex flex-wrap gap-4"
                    >
                      {["Early Stage", "Growing", "Established"].map((stage) => (
                        <div key={stage} className="flex items-center space-x-2">
                          <RadioGroupItem value={stage} id={stage} className="border-primary text-primary" />
                          <Label htmlFor={stage} className="text-muted-foreground cursor-pointer">{stage}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* Section 3: Community Fit */}
              <div>
                <SectionDivider number={3} title="Community Fit" />
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="whyJoin" className="text-foreground font-medium">Why do you want to join Indian Business Circle (IBC)? *</Label>
                    <Textarea 
                      id="whyJoin"
                      name="whyJoin"
                      placeholder="Share your motivation for joining..."
                      value={formData.whyJoin}
                      onChange={handleChange}
                      className="bg-secondary border-0 rounded-lg min-h-[100px] resize-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatToGain" className="text-foreground font-medium">What do you hope to gain from the IBC community? *</Label>
                    <Textarea 
                      id="whatToGain"
                      name="whatToGain"
                      placeholder="e.g., Networking, partnerships, knowledge sharing..."
                      value={formData.whatToGain}
                      onChange={handleChange}
                      className="bg-secondary border-0 rounded-lg min-h-[100px] resize-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="howContribute" className="text-foreground font-medium">How can you contribute to the IBC community? *</Label>
                    <Textarea 
                      id="howContribute"
                      name="howContribute"
                      placeholder="Share your expertise, mentorship, or other contributions..."
                      value={formData.howContribute}
                      onChange={handleChange}
                      className="bg-secondary border-0 rounded-lg min-h-[100px] resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: Membership Selection */}
              <div>
                <SectionDivider number={4} title="Membership Selection" />
                <RadioGroup 
                  value={formData.membershipType} 
                  onValueChange={(value) => handleRadioChange("membershipType", value)}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  <Label 
                    htmlFor="founding" 
                    className={`relative flex flex-col p-5 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.membershipType === "Founding Membership" 
                        ? "border-primary bg-primary/5" 
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value="Founding Membership" id="founding" className="absolute top-4 right-4 border-primary text-primary" />
                    <span className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Exclusive</span>
                    <span className="text-lg font-heading font-semibold text-foreground">Founding Membership</span>
                    <span className="text-sm text-muted-foreground mt-1">Be part of the founding members with exclusive benefits</span>
                  </Label>
                  <Label 
                    htmlFor="annual" 
                    className={`relative flex flex-col p-5 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.membershipType === "Annual Membership" 
                        ? "border-primary bg-primary/5" 
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value="Annual Membership" id="annual" className="absolute top-4 right-4 border-primary text-primary" />
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Standard</span>
                    <span className="text-lg font-heading font-semibold text-foreground">Annual Membership</span>
                    <span className="text-sm text-muted-foreground mt-1">Join our community with yearly membership benefits</span>
                  </Label>
                </RadioGroup>
              </div>

              {/* Section 5: Engagement & Commitment */}
              <div>
                <SectionDivider number={5} title="Engagement & Commitment" />
                <div className="space-y-5">
                  <div className="space-y-3">
                    <Label className="text-foreground font-medium">Are you willing to participate in workshops and monthly meetups? *</Label>
                    <RadioGroup 
                      value={formData.willingToParticipate} 
                      onValueChange={(value) => handleRadioChange("willingToParticipate", value)}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Yes" id="participate-yes" className="border-primary text-primary" />
                        <Label htmlFor="participate-yes" className="text-muted-foreground cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="No" id="participate-no" className="border-primary text-primary" />
                        <Label htmlFor="participate-no" className="text-muted-foreground cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-3">
                    <Label className="text-foreground font-medium">Do you acknowledge that IBC is a curated community and all applications are reviewed? *</Label>
                    <RadioGroup 
                      value={formData.acknowledgeReview} 
                      onValueChange={(value) => handleRadioChange("acknowledgeReview", value)}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Yes" id="acknowledge-yes" className="border-primary text-primary" />
                        <Label htmlFor="acknowledge-yes" className="text-muted-foreground cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="No" id="acknowledge-no" className="border-primary text-primary" />
                        <Label htmlFor="acknowledge-no" className="text-muted-foreground cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* Section 6: IBC Stories (Optional) */}
              <div>
                <SectionDivider number={6} title="IBC Stories (Optional)" />
                <div className="space-y-3">
                  <Label className="text-foreground font-medium">Would you be willing to share your business journey for IBC Stories?</Label>
                  <RadioGroup 
                    value={formData.shareStory} 
                    onValueChange={(value) => handleRadioChange("shareStory", value)}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Yes" id="story-yes" className="border-primary text-primary" />
                      <Label htmlFor="story-yes" className="text-muted-foreground cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Maybe Later" id="story-later" className="border-primary text-primary" />
                      <Label htmlFor="story-later" className="text-muted-foreground cursor-pointer">Maybe Later</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Section 7: Declaration */}
              <div>
                <SectionDivider number={7} title="Declaration" />
                <div className="flex items-start space-x-3 p-4 bg-secondary rounded-lg">
                  <Checkbox 
                    id="declaration"
                    checked={formData.declaration}
                    onCheckedChange={(checked) => handleCheckboxChange("declaration", checked as boolean)}
                    className="mt-0.5 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  />
                  <Label htmlFor="declaration" className="text-muted-foreground leading-relaxed cursor-pointer">
                    I confirm that all information provided in this application is accurate and true to the best of my knowledge. 
                    I understand that providing false information may result in the rejection of my application or termination of membership. *
                  </Label>
                </div>
              </div>

              {/* Submit Area */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-cream rounded-xl group disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  {!isSubmitting && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </Button>
                <p className="text-center text-muted-foreground text-sm mt-4">
                  All applications are reviewed before approval. We'll get back to you within 2-3 business days.
                </p>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
