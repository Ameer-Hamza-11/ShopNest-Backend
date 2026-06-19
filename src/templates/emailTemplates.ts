export const emailTemplates = {
    welcomeOtp: (name: string, otp: string) => ({
      subject: "Welcome to ShopNest - Verify Your Email",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Verify Your Email - ShopNest</title>
          <style>
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.05); }
            }
            @keyframes glow {
              0%, 100% { box-shadow: 0 0 5px #ff6600, 0 0 10px #ff6600; }
              50% { box-shadow: 0 0 20px #ff6600, 0 0 30px #ff4400; }
            }
            @keyframes slideIn {
              from { opacity: 0; transform: translateX(-30px); }
              to { opacity: 1; transform: translateX(0); }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #0a0a0a; border-radius: 20px; overflow: hidden; animation: fadeIn 0.6s ease-out; border: 2px solid #ff6600; box-shadow: 0 10px 40px rgba(255, 102, 0, 0.2);">
              
              <div style="background: linear-gradient(135deg, #ff6600 0%, #ff4400 100%); padding: 40px 30px; text-align: center; position: relative; overflow: hidden;">
                <div style="position: absolute; top: -50%; right: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); transform: rotate(45deg);"></div>
                <h1 style="margin: 0; font-size: 48px; color: #ffffff; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); letter-spacing: 2px;">🛍️ ShopNest</h1>
                <p style="margin: 10px 0 0; color: #fff; opacity: 0.95; font-size: 18px;">Your Shopping Paradise</p>
              </div>
              
              <div style="padding: 40px 30px;">
                <div style="animation: slideIn 0.5s ease-out;">
                  <h2 style="color: #ff6600; margin: 0 0 10px 0; font-size: 28px;">Welcome to ShopNest! 🔥</h2>
                  <p style="color: #e0e0e0; font-size: 16px; line-height: 1.6;">Hello <strong style="color: #ff6600;">${name}</strong>,</p>
                  <p style="color: #e0e0e0; font-size: 16px; line-height: 1.6;">Thank you for choosing ShopNest! We're thrilled to have you on board. Please verify your email address to get started with your shopping journey.</p>
                </div>
                
                <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border-radius: 15px; padding: 30px; text-align: center; margin: 30px 0; border: 1px solid #ff6600; animation: glow 2s infinite;">
                  <p style="color: #ff6600; margin: 0 0 15px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">Your Verification Code</p>
                  <div style="font-size: 48px; font-weight: bold; color: #ff6600; letter-spacing: 10px; font-family: monospace; background: #000000; padding: 20px; border-radius: 10px; display: inline-block; animation: pulse 1.5s infinite;">${otp}</div>
                  <p style="color: #888; margin: 20px 0 0 0; font-size: 12px;">⏰ This code will expire in <strong style="color: #ff6600;">10 minutes</strong></p>
                </div>
                
                <div style="margin: 30px 0; padding: 20px 0; border-top: 1px solid #333; border-bottom: 1px solid #333;">
                  <p style="color: #ff6600; text-align: center; margin: 0 0 20px 0; font-weight: bold;">✨ What awaits you at ShopNest?</p>
                  <div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
                    <div style="text-align: center; padding: 10px;">
                      <div style="font-size: 30px;">🚚</div>
                      <p style="color: #ccc; margin: 5px 0; font-size: 12px;">Free Shipping</p>
                    </div>
                    <div style="text-align: center; padding: 10px;">
                      <div style="font-size: 30px;">🎁</div>
                      <p style="color: #ccc; margin: 5px 0; font-size: 12px;">Special Offers</p>
                    </div>
                    <div style="text-align: center; padding: 10px;">
                      <div style="font-size: 30px;">🛡️</div>
                      <p style="color: #ccc; margin: 5px 0; font-size: 12px;">Secure Payments</p>
                    </div>
                    <div style="text-align: center; padding: 10px;">
                      <div style="font-size: 30px;">💎</div>
                      <p style="color: #ccc; margin: 5px 0; font-size: 12px;">Premium Quality</p>
                    </div>
                  </div>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="#" style="display: inline-block; background: linear-gradient(135deg, #ff6600 0%, #ff4400 100%); color: white; text-decoration: none; padding: 14px 35px; border-radius: 50px; font-weight: bold; font-size: 16px; transition: transform 0.3s; box-shadow: 0 4px 15px rgba(255, 102, 0, 0.3);">Verify Email →</a>
                </div>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
                  <p style="color: #999; font-size: 13px; margin: 5px 0;">📧 <a href="mailto:ameerhamza.dev.pk@gmail.com" style="color: #ff6600; text-decoration: none;">ameerhamza.dev.pk@gmail.com</a></p>
                  <p style="color: #999; font-size: 13px; margin: 5px 0;">📞 <a href="tel:+923260784463" style="color: #ff6600; text-decoration: none;">03260784463</a></p>
                  <p style="color: #666; font-size: 11px; margin: 15px 0 0 0;">© 2024 ShopNest. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    }),
  
    welcomeMail: (name: string) => ({
      subject: "🎉 Welcome to ShopNest - Your Account is Ready!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to ShopNest</title>
          <style>
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            @keyframes shimmer {
              0% { background-position: -1000px 0; }
              100% { background-position: 1000px 0; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #0a0a0a; border-radius: 20px; overflow: hidden; animation: fadeIn 0.6s ease-out; border: 2px solid #ff6600;">
              
              <div style="background: linear-gradient(135deg, #ff6600 0%, #ff4400 100%); padding: 40px 30px; text-align: center;">
                <div style="font-size: 60px; animation: bounce 2s infinite;">🎉</div>
                <h1 style="margin: 10px 0 0; font-size: 42px; color: #ffffff;">ShopNest</h1>
              </div>
              
              <div style="padding: 40px 30px;">
                <div style="animation: fadeIn 0.6s ease-out;">
                  <h2 style="color: #ff6600; margin: 0 0 15px 0;">Hello ${name}! 👋</h2>
                  <p style="color: #e0e0e0; font-size: 16px; line-height: 1.6;">Your account has been successfully created at <strong style="color: #ff6600;">ShopNest</strong>.</p>
                  <p style="color: #e0e0e0; font-size: 16px; line-height: 1.6; margin-top: 15px;">We're excited to have you as part of our growing family! Get ready to explore amazing products, exclusive deals, and a seamless shopping experience.</p>
                </div>
                
                <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border-radius: 15px; padding: 25px; margin: 30px 0; text-align: center; border-left: 4px solid #ff6600;">
                  <div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
                    <div>
                      <div style="font-size: 28px; font-weight: bold; color: #ff6600;">1000+</div>
                      <div style="color: #888; font-size: 12px;">Products</div>
                    </div>
                    <div>
                      <div style="font-size: 28px; font-weight: bold; color: #ff6600;">50k+</div>
                      <div style="color: #888; font-size: 12px;">Happy Customers</div>
                    </div>
                    <div>
                      <div style="font-size: 28px; font-weight: bold; color: #ff6600;">24/7</div>
                      <div style="color: #888; font-size: 12px;">Support</div>
                    </div>
                  </div>
                </div>
                
                <div style="margin: 30px 0;">
                  <p style="color: #ff6600; font-weight: bold; margin-bottom: 15px;">🚀 Next Steps:</p>
                  <div style="color: #ccc; font-size: 14px; line-height: 2;">
                    <div>✓ Complete your profile</div>
                    <div>✓ Browse our collections</div>
                    <div>✓ Add items to wishlist</div>
                    <div>✓ Make your first purchase</div>
                  </div>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="#" style="display: inline-block; background: linear-gradient(135deg, #ff6600 0%, #ff4400 100%); color: white; text-decoration: none; padding: 14px 35px; border-radius: 50px; font-weight: bold;">Start Shopping →</a>
                </div>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
                  <p style="color: #999; font-size: 13px; margin: 5px 0;">📧 <a href="mailto:ameerhamza.dev.pk@gmail.com" style="color: #ff6600; text-decoration: none;">ameerhamza.dev.pk@gmail.com</a></p>
                  <p style="color: #999; font-size: 13px; margin: 5px 0;">📞 <a href="tel:+923260784463" style="color: #ff6600; text-decoration: none;">03260784463</a></p>
                  <p style="color: #666; font-size: 11px; margin: 15px 0 0 0;">© 2024 ShopNest. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    }),
  
    resetPassword: (name: string, otp: string) => ({
      subject: "🔐 Reset Your ShopNest Password",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Reset Password - ShopNest</title>
          <style>
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(-5px); }
              75% { transform: translateX(5px); }
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.8; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #0a0a0a; border-radius: 20px; overflow: hidden; animation: fadeIn 0.6s ease-out; border: 2px solid #ff6600;">
              
              <div style="background: linear-gradient(135deg, #ff6600 0%, #ff4400 100%); padding: 35px 30px; text-align: center;">
                <div style="font-size: 50px; animation: shake 0.5s;">🔐</div>
                <h1 style="margin: 10px 0 0; font-size: 36px; color: #ffffff;">ShopNest</h1>
                <p style="margin: 5px 0 0; color: #fff; opacity: 0.9;">Password Reset Request</p>
              </div>
              
              <div style="padding: 40px 30px;">
                <div style="animation: fadeIn 0.6s ease-out;">
                  <h2 style="color: #ff6600; margin: 0 0 15px 0;">Hello ${name},</h2>
                  <p style="color: #e0e0e0; font-size: 16px; line-height: 1.6;">We received a request to reset your password for your ShopNest account. Don't worry, we've got your back!</p>
                  <p style="color: #e0e0e0; font-size: 16px; line-height: 1.6; margin-top: 15px;">Use the following OTP to reset your password:</p>
                </div>
                
                <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border-radius: 15px; padding: 30px; text-align: center; margin: 30px 0; border: 2px solid #ff6600; position: relative;">
                  <div style="position: absolute; top: -12px; left: 20px; background: #ff6600; padding: 2px 12px; border-radius: 20px;">
                    <span style="color: black; font-size: 12px; font-weight: bold;">⚠️ SECURE CODE</span>
                  </div>
                  <div style="font-size: 52px; font-weight: bold; color: #ff6600; letter-spacing: 12px; font-family: monospace; background: #000000; padding: 20px; border-radius: 10px; margin-top: 10px;">${otp}</div>
                  <p style="color: #ff6600; margin: 20px 0 0 0; font-size: 12px; font-weight: bold;">⏰ Expires in 10 minutes</p>
                </div>
                
                <div style="background: rgba(255, 102, 0, 0.1); border-left: 4px solid #ff6600; padding: 15px; margin: 25px 0; border-radius: 5px;">
                  <p style="color: #ccc; margin: 0; font-size: 13px; line-height: 1.5;">
                    <strong style="color: #ff6600;">⚠️ Important:</strong> If you didn't request this password reset, please ignore this email or contact our support team immediately to secure your account.
                  </p>
                </div>
                
                <div style="margin: 30px 0;">
                  <p style="color: #ff6600; font-weight: bold; margin-bottom: 10px;">🛡️ Security Tips:</p>
                  <ul style="color: #ccc; font-size: 13px; line-height: 1.8; padding-left: 20px;">
                    <li>Never share your OTP with anyone</li>
                    <li>Use a strong, unique password</li>
                    <li>Enable two-factor authentication</li>
                  </ul>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="#" style="display: inline-block; background: linear-gradient(135deg, #ff6600 0%, #ff4400 100%); color: white; text-decoration: none; padding: 14px 35px; border-radius: 50px; font-weight: bold;">Reset Password →</a>
                </div>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
                  <p style="color: #999; font-size: 13px; margin: 5px 0;">Need help? Contact support:</p>
                  <p style="color: #999; font-size: 13px; margin: 5px 0;">📧 <a href="mailto:ameerhamza.dev.pk@gmail.com" style="color: #ff6600; text-decoration: none;">ameerhamza.dev.pk@gmail.com</a></p>
                  <p style="color: #999; font-size: 13px; margin: 5px 0;">📞 <a href="tel:+923260784463" style="color: #ff6600; text-decoration: none;">03260784463</a></p>
                  <p style="color: #666; font-size: 11px; margin: 15px 0 0 0;">© 2024 ShopNest. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    }),
  
    accountVerified: (name: string) => ({
      subject: "✅ Email Verified - Welcome to ShopNest!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Account Verified - ShopNest</title>
          <style>
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes checkmark {
              0% { transform: scale(0); opacity: 0; }
              50% { transform: scale(1.2); }
              100% { transform: scale(1); opacity: 1; }
            }
            @keyframes glowPulse {
              0%, 100% { filter: drop-shadow(0 0 5px #ff6600); }
              50% { filter: drop-shadow(0 0 20px #ff6600); }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #0a0a0a; border-radius: 20px; overflow: hidden; animation: fadeIn 0.6s ease-out; border: 2px solid #ff6600; box-shadow: 0 10px 40px rgba(255, 102, 0, 0.2);">
              
              <div style="background: linear-gradient(135deg, #ff6600 0%, #ff4400 100%); padding: 40px 30px; text-align: center; position: relative; overflow: hidden;">
                <div style="position: absolute; top: -50%; right: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); transform: rotate(45deg);"></div>
                <div style="font-size: 80px; animation: checkmark 0.8s ease-out;">✅</div>
                <h1 style="margin: 10px 0 0; font-size: 42px; color: #ffffff; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">ShopNest</h1>
                <p style="margin: 10px 0 0; color: #fff; opacity: 0.95; font-size: 18px;">Email Verified Successfully!</p>
              </div>
              
              <div style="padding: 40px 30px;">
                <div style="text-align: center; margin-bottom: 30px;">
                  <div style="font-size: 60px; animation: glowPulse 2s infinite;">🎉</div>
                </div>
                
                <div style="animation: fadeIn 0.6s ease-out;">
                  <h2 style="color: #ff6600; margin: 0 0 15px 0; text-align: center;">Welcome to the Family, ${name}! 🎊</h2>
                  <p style="color: #e0e0e0; font-size: 16px; line-height: 1.6; text-align: center;">Your email has been successfully verified. Your account is now fully activated!</p>
                </div>
                
                <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border-radius: 15px; padding: 25px; margin: 30px 0; border: 1px solid #ff6600;">
                  <p style="color: #ff6600; text-align: center; font-weight: bold; margin-bottom: 15px;">🎁 What's Next?</p>
                  <div style="color: #ccc; font-size: 14px; line-height: 2;">
                    <div style="display: flex; align-items: center; margin: 10px 0;">
                      <span style="color: #ff6600; margin-right: 10px;">✓</span> Complete your profile
                    </div>
                    <div style="display: flex; align-items: center; margin: 10px 0;">
                      <span style="color: #ff6600; margin-right: 10px;">✓</span> Browse 1000+ products
                    </div>
                    <div style="display: flex; align-items: center; margin: 10px 0;">
                      <span style="color: #ff6600; margin-right: 10px;">✓</span> Get exclusive deals
                    </div>
                    <div style="display: flex; align-items: center; margin: 10px 0;">
                      <span style="color: #ff6600; margin-right: 10px;">✓</span> Earn loyalty points
                    </div>
                  </div>
                </div>
                
                <div style="background: rgba(255, 102, 0, 0.1); border-radius: 10px; padding: 15px; margin: 20px 0; text-align: center; border-left: 4px solid #ff6600;">
                  <p style="color: #ff6600; margin: 0; font-size: 14px;">🎉 Get 10% off on your first purchase! Use code: <strong style="background: #000; padding: 5px 10px; border-radius: 5px;">WELCOME10</strong></p>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="#" style="display: inline-block; background: linear-gradient(135deg, #ff6600 0%, #ff4400 100%); color: white; text-decoration: none; padding: 14px 35px; border-radius: 50px; font-weight: bold; font-size: 16px; transition: transform 0.3s; box-shadow: 0 4px 15px rgba(255, 102, 0, 0.3);">Start Shopping Now →</a>
                </div>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
                  <p style="color: #999; font-size: 13px; margin: 5px 0;">📧 <a href="mailto:ameerhamza.dev.pk@gmail.com" style="color: #ff6600; text-decoration: none;">ameerhamza.dev.pk@gmail.com</a></p>
                  <p style="color: #999; font-size: 13px; margin: 5px 0;">📞 <a href="tel:+923260784463" style="color: #ff6600; text-decoration: none;">03260784463</a></p>
                  <p style="color: #666; font-size: 11px; margin: 15px 0 0 0;">© 2024 ShopNest. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    }),
    orderCreated: (name: string, orderId: string, items: Array<{name: string, quantity: number, price: number}>, total: number) => ({
      subject: "🛍️ Order Confirmed - ShopNest",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Order Confirmed - ShopNest</title>
          <style>
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes slideIn {
              from { opacity: 0; transform: translateX(-30px); }
              to { opacity: 1; transform: translateX(0); }
            }
            @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.05); }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #0a0a0a; border-radius: 20px; overflow: hidden; animation: fadeIn 0.6s ease-out; border: 2px solid #ff6600; box-shadow: 0 10px 40px rgba(255, 102, 0, 0.2);">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #ff6600 0%, #ff4400 100%); padding: 35px 30px; text-align: center; position: relative; overflow: hidden;">
                <div style="position: absolute; top: -50%; right: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); transform: rotate(45deg);"></div>
                <div style="font-size: 60px; animation: pulse 1.5s infinite;">🎉</div>
                <h1 style="margin: 10px 0 0; font-size: 38px; color: #ffffff; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">Order Confirmed!</h1>
                <p style="margin: 10px 0 0; color: #fff; opacity: 0.95; font-size: 16px;">Thank you for shopping with us</p>
              </div>
              
              <!-- Content -->
              <div style="padding: 40px 30px;">
                <div style="animation: slideIn 0.5s ease-out;">
                  <h2 style="color: #ff6600; margin: 0 0 10px 0;">Hello ${name}! 👋</h2>
                  <p style="color: #e0e0e0; font-size: 16px; line-height: 1.6;">Your order has been successfully placed and is being processed.</p>
                  <p style="color: #e0e0e0; font-size: 16px; line-height: 1.6;">Order ID: <strong style="color: #ff6600;">${orderId}</strong></p>
                </div>
                
                <!-- Order Summary -->
                <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border-radius: 15px; padding: 25px; margin: 30px 0; border: 1px solid #ff6600;">
                  <p style="color: #ff6600; text-align: center; font-weight: bold; margin-bottom: 20px; font-size: 18px;">📋 Order Summary</p>
                  <div style="border-bottom: 1px solid #333; margin-bottom: 15px;">
                    ${items.map(item => `
                      <div style="display: flex; justify-content: space-between; padding: 10px 0; color: #ccc; font-size: 14px;">
                        <span>${item.name} × ${item.quantity}</span>
                        <span style="color: #ff6600;">$${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    `).join('')}
                  </div>
                  <div style="display: flex; justify-content: space-between; padding: 15px 0 5px; color: #fff; font-size: 18px; font-weight: bold;">
                    <span>Total Amount</span>
                    <span style="color: #ff6600;">$${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <!-- Delivery Info -->
                <div style="margin: 25px 0; padding: 20px; background: rgba(255, 102, 0, 0.05); border-radius: 10px; border-left: 4px solid #ff6600;">
                  <p style="color: #ff6600; margin: 0 0 10px 0; font-weight: bold;">🚚 Delivery Information</p>
                  <p style="color: #ccc; margin: 5px 0; font-size: 14px;">Estimated Delivery: <strong>3-5 business days</strong></p>
                  <p style="color: #ccc; margin: 5px 0; font-size: 14px;">You will receive tracking details via email once shipped.</p>
                </div>
                
                <!-- Next Steps -->
                <div style="margin: 25px 0;">
                  <p style="color: #ff6600; font-weight: bold; margin-bottom: 15px;">📌 What's Next?</p>
                  <div style="color: #ccc; font-size: 14px; line-height: 2;">
                    <div>✓ Order confirmation sent to your email</div>
                    <div>✓ We'll notify you when order is shipped</div>
                    <div>✓ Track your order in real-time</div>
                    <div>✓ Rate and review products after delivery</div>
                  </div>
                </div>
                
                <!-- Support -->
                <div style="background: rgba(255, 102, 0, 0.1); border-radius: 10px; padding: 15px; margin: 20px 0; text-align: center;">
                  <p style="color: #ff6600; margin: 0; font-size: 14px;">❓ Need help with your order? Contact our support team</p>
                </div>
                
                <!-- CTA Buttons -->
                <div style="text-align: center; margin: 30px 0;">
                  <a href="#" style="display: inline-block; background: linear-gradient(135deg, #ff6600 0%, #ff4400 100%); color: white; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: bold; font-size: 14px; margin: 0 5px; box-shadow: 0 4px 15px rgba(255, 102, 0, 0.3);">Track Order →</a>
                  <a href="#" style="display: inline-block; background: transparent; color: #ff6600; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: bold; font-size: 14px; margin: 0 5px; border: 1px solid #ff6600;">Continue Shopping →</a>
                </div>
                
                <!-- Footer -->
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
                  <p style="color: #999; font-size: 13px; margin: 5px 0;">📧 <a href="mailto:ameerhamza.dev.pk@gmail.com" style="color: #ff6600; text-decoration: none;">ameerhamza.dev.pk@gmail.com</a></p>
                  <p style="color: #999; font-size: 13px; margin: 5px 0;">📞 <a href="tel:+923260784463" style="color: #ff6600; text-decoration: none;">03260784463</a></p>
                  <p style="color: #666; font-size: 11px; margin: 15px 0 0 0;">© 2024 ShopNest. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    }),
    orderStatusUpdated: (name: string, orderId: string, status: string) => ({
      subject: `📦 Order ${status} - ShopNest`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Order ${status} - ShopNest</title>
          <style>
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes slideIn {
              from { opacity: 0; transform: translateX(-30px); }
              to { opacity: 1; transform: translateX(0); }
            }
            @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.05); }
            }
            @keyframes statusBadge {
              0% { transform: rotate(0deg); }
              25% { transform: rotate(5deg); }
              75% { transform: rotate(-5deg); }
              100% { transform: rotate(0deg); }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #0a0a0a; border-radius: 20px; overflow: hidden; animation: fadeIn 0.6s ease-out; border: 2px solid #ff6600; box-shadow: 0 10px 40px rgba(255, 102, 0, 0.2);">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #ff6600 0%, #ff4400 100%); padding: 35px 30px; text-align: center; position: relative; overflow: hidden;">
                <div style="position: absolute; top: -50%; right: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); transform: rotate(45deg);"></div>
                <div style="font-size: 60px; animation: pulse 1.5s infinite;">
                  ${status === "Shipped" ? "🚚" : status === "Delivered" ? "✅" : status === "Cancelled" ? "❌" : "📦"}
                </div>
                <h1 style="margin: 10px 0 0; font-size: 38px; color: #ffffff; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">Order ${status}</h1>
                <p style="margin: 10px 0 0; color: #fff; opacity: 0.95; font-size: 16px;">Your order status has been updated</p>
              </div>
              
              <!-- Content -->
              <div style="padding: 40px 30px;">
                <div style="animation: slideIn 0.5s ease-out;">
                  <h2 style="color: #ff6600; margin: 0 0 10px 0;">Hello ${name}! 👋</h2>
                  <p style="color: #e0e0e0; font-size: 16px; line-height: 1.6;">Your order status has been updated to:</p>
                  
                  <!-- Status Badge -->
                  <div style="text-align: center; margin: 25px 0;">
                    <div style="display: inline-block; background: linear-gradient(135deg, #ff6600 0%, #ff4400 100%); padding: 12px 30px; border-radius: 50px; animation: statusBadge 0.5s ease;">
                      <span style="color: white; font-size: 20px; font-weight: bold; text-transform: uppercase;">${status}</span>
                    </div>
                  </div>
                  
                  <p style="color: #e0e0e0; font-size: 16px; line-height: 1.6;">Order ID: <strong style="color: #ff6600;">${orderId}</strong></p>
                </div>
                
                <!-- Status Specific Message -->
                <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border-radius: 15px; padding: 25px; margin: 30px 0; border: 1px solid #ff6600;">
                  ${status === "Processing" ? `
                    <div style="text-align: center;">
                      <div style="font-size: 40px;">⚙️</div>
                      <p style="color: #ff6600; font-weight: bold; margin: 10px 0;">Your order is being processed</p>
                      <p style="color: #ccc; font-size: 14px;">We're preparing your items for shipment. You'll receive another update once your order is shipped.</p>
                    </div>
                  ` : status === "Shipped" ? `
                    <div style="text-align: center;">
                      <div style="font-size: 40px;">🚚</div>
                      <p style="color: #ff6600; font-weight: bold; margin: 10px 0;">Your order is on the way!</p>
                      <p style="color: #ccc; font-size: 14px;">Your package has been shipped and is en route to your delivery address.</p>
                      <div style="margin-top: 20px;">
                        <a href="#" style="display: inline-block; background: linear-gradient(135deg, #ff6600 0%, #ff4400 100%); color: white; text-decoration: none; padding: 10px 25px; border-radius: 50px; font-size: 14px;">Track Package →</a>
                      </div>
                    </div>
                  ` : status === "Delivered" ? `
                    <div style="text-align: center;">
                      <div style="font-size: 40px;">✅</div>
                      <p style="color: #ff6600; font-weight: bold; margin: 10px 0;">Your order has been delivered!</p>
                      <p style="color: #ccc; font-size: 14px;">We hope you love your purchase! Please take a moment to rate and review your items.</p>
                      <div style="margin-top: 20px;">
                        <a href="#" style="display: inline-block; background: linear-gradient(135deg, #ff6600 0%, #ff4400 100%); color: white; text-decoration: none; padding: 10px 25px; border-radius: 50px; font-size: 14px;">Write a Review →</a>
                      </div>
                    </div>
                  ` : status === "Cancelled" ? `
                    <div style="text-align: center;">
                      <div style="font-size: 40px;">❌</div>
                      <p style="color: #ff6600; font-weight: bold; margin: 10px 0;">Your order has been cancelled</p>
                      <p style="color: #ccc; font-size: 14px;">If you didn't request this cancellation or have any questions, please contact our support team immediately.</p>
                    </div>
                  ` : status === "Refunded" ? `
                    <div style="text-align: center;">
                      <div style="font-size: 40px;">💰</div>
                      <p style="color: #ff6600; font-weight: bold; margin: 10px 0;">Your order has been refunded</p>
                      <p style="color: #ccc; font-size: 14px;">The refund amount will be credited to your original payment method within 5-7 business days.</p>
                    </div>
                  ` : `
                    <div style="text-align: center;">
                      <div style="font-size: 40px;">📦</div>
                      <p style="color: #ff6600; font-weight: bold; margin: 10px 0;">Order status updated to: ${status}</p>
                      <p style="color: #ccc; font-size: 14px;">We'll keep you updated on any further changes to your order.</p>
                    </div>
                  `}
                </div>
                
                <!-- What's Next Section (for non-final statuses) -->
                ${status !== "Delivered" && status !== "Cancelled" && status !== "Refunded" ? `
                  <div style="margin: 25px 0;">
                    <p style="color: #ff6600; font-weight: bold; margin-bottom: 15px;">📌 What's Next?</p>
                    <div style="color: #ccc; font-size: 14px; line-height: 2;">
                      ${status === "Processing" ? `
                        <div>✓ Order confirmation verified</div>
                        <div>✓ Payment confirmed</div>
                        <div>✓ Preparing for shipment</div>
                        <div>→ You'll receive shipping confirmation soon</div>
                      ` : status === "Shipped" ? `
                        <div>✓ Package in transit</div>
                        <div>✓ Track your shipment in real-time</div>
                        <div>✓ Delivery within 3-5 business days</div>
                        <div>→ You'll receive delivery confirmation</div>
                      ` : `
                        <div>✓ Order status updated</div>
                        <div>✓ We'll notify you of any changes</div>
                        <div>✓ Track your order in your account</div>
                        <div>→ Contact support for any questions</div>
                      `}
                    </div>
                  </div>
                ` : status === "Delivered" ? `
                  <div style="margin: 25px 0;">
                    <p style="color: #ff6600; font-weight: bold; margin-bottom: 15px;">💝 Enjoy Your Purchase!</p>
                    <div style="color: #ccc; font-size: 14px; line-height: 2;">
                      <div>✓ Rate and review your products</div>
                      <div>✓ Share photos on social media</div>
                      <div>✓ Earn loyalty points for future purchases</div>
                      <div>✓ Get exclusive offers for your next order</div>
                    </div>
                  </div>
                ` : ""}
                
                <!-- Support -->
                <div style="background: rgba(255, 102, 0, 0.1); border-radius: 10px; padding: 15px; margin: 20px 0; text-align: center; border-left: 4px solid #ff6600;">
                  <p style="color: #ff6600; margin: 0; font-size: 14px;">❓ Have questions about your order? Contact our support team</p>
                </div>
                
                <!-- CTA Buttons -->
                <div style="text-align: center; margin: 30px 0;">
                  <a href="#" style="display: inline-block; background: linear-gradient(135deg, #ff6600 0%, #ff4400 100%); color: white; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: bold; font-size: 14px; margin: 0 5px; box-shadow: 0 4px 15px rgba(255, 102, 0, 0.3);">View Order Details →</a>
                  <a href="#" style="display: inline-block; background: transparent; color: #ff6600; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: bold; font-size: 14px; margin: 0 5px; border: 1px solid #ff6600;">Shop More →</a>
                </div>
                
                <!-- Footer -->
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
                  <p style="color: #999; font-size: 13px; margin: 5px 0;">📧 <a href="mailto:ameerhamza.dev.pk@gmail.com" style="color: #ff6600; text-decoration: none;">ameerhamza.dev.pk@gmail.com</a></p>
                  <p style="color: #999; font-size: 13px; margin: 5px 0;">📞 <a href="tel:+923260784463" style="color: #ff6600; text-decoration: none;">03260784463</a></p>
                  <p style="color: #666; font-size: 11px; margin: 15px 0 0 0;">© 2024 ShopNest. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    }),
  };