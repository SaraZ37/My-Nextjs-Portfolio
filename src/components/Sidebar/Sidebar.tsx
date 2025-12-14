// === بيانات مستويات الدعم (Support Tiers Data) ===
const supportTiers = [
    { 
        id: 1, 
        amount: 50, 
        title: "Digital Supporter", 
        reward: "A public shoutout on the film's official Twitter/X feed.",
        color: 'border-[#B87333]/30'
    },
    { 
        id: 2, 
        amount: 100, 
        title: "Closing Credit Patron", 
        reward: "Your name listed in the film's closing credits (Tier 3 section).",
        color: 'border-[#B87333]/50'
    },
    { 
        id: 3, 
        amount: 500, 
        title: "Associate Producer", 
        reward: "Company logo placement on the film's website + IMDb credit mention.",
        color: 'border-[#B87333]/70'
    },
    { 
        id: 4, 
        amount: 1000, 
        title: "Executive Supporter", 
        reward: "VIP invite to the film premiere + a private screening link.",
        color: 'border-[#B87333]'
    },
];

// === مكون قسم الدعم (Support Section Component) ===
const SupportSection: React.FC = () => {
    return (
        <div id="support" className="py-24 px-6 lg:px-12 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-serif font-light text-[#1E1E1E] mb-4">
                    Support Our Mission
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-6 font-light leading-relaxed">
                    We are currently seeking critical funding to finalize production on our new feature film. Every contribution, big or small, helps us take a significant step closer to bringing this vision to the screen. Choose a support tier and become part of the SaraCrew legacy!
                </p>

               {/* Grid for Tiers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {supportTiers.map((tier) => (
                        <div 
                            key={tier.id} 
                            // تصميم البطاقة: خلفية فاتحة، حد نحاسي، ظل
                            className={`p-2 bg-[#F3F2EE] rounded-xl shadow-lg border-b-2 ${tier.color} transition duration-300 hover:shadow-xl hover:scale-[1.03] flex flex-col justify-between`}
                        >
                            <div>
                                <h3 className="text-xs font-bold text-[#B87333] mb-2">
                                    {/* تم تصغير الخط إلى text-xs */}
                                    ${tier.amount}
                                </h3>
                                <p className="text-xs font-semibold text-[#1E1E1E] mb-2">
                                    {/* تم تصغير الخط إلى text-xs */}
                                    {tier.title}
                                </p>
                                <p className="text-xs text-gray-600 mb-2 pt-2 border-t border-gray-300">
                                    {/* 1. تم تصغير الخط إلى text-xs */}
                                    {/* 2. تم حذف الارتفاع الثابت h-14 للسماح للنص بالتمدد */}
                                    {/* 3. تم حذف الـ flex و justify-center للحفاظ على المحاذاة اليسرى/العلوية الطبيعية للنص الطويل */}
                                    {tier.reward}
                                </p>
                            </div>

                            {/* زر التبرع */}
                            <a
                                // يتم استبدال #donate-checkout برابط دفع حقيقي (PayPal/Stripe/Crowdfunding)
                                href={`#donate-checkout?tier=${tier.amount}`} 
                                className="block w-full text-center bg-[#1E1E1E] text-white px-0 py-0 rounded-lg font-semibold 
                                           mt-4 hover:bg-[#B87333] transition duration-300 uppercase tracking-wider text-xs"
                            >
                                {/* تم تصغير الخط إلى text-xs */}
                                Fund This Tier
                            </a>
                        </div>
                    ))}
                </div>
                
                <p className="text-sm text-gray-500 mt-2">
                   All donations are final and contribute directly to the film production budget (equipment, cast, and post-production).
                </p>

            </div>
        </div>
    );
};

export default SupportSection;