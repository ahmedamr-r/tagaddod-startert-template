import { Button, Sonner } from '@tagaddod-design/react'
import { useRTL } from './lib/use-rtl'
import './App.css'
import tagaddodLogo from '/tagaddod-logo.svg'

function App() {
  const { toggleDirection, locale } = useRTL()

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: 'var(--t-space-800)',
      background: 'var(--t-color-fill-primary)'
    }}>
      <div style={{ 
        textAlign: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 'var(--t-space-800)', 
        maxWidth: '48rem',
        width: '100%'
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 'var(--t-space-400)' 
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 'var(--t-space-400)'
          }}>
            <img 
              src={tagaddodLogo} 
              alt="Tagaddod Design System" 
              style={{ 
                height: 'var(--t-space-600)',
                width: 'auto'
              }}
            />
          </div>
          <h1 style={{ 
            font: 'var(--t-typography-heading-3xl)', 
            color: 'var(--t-color-text-primary)',
            margin: 0
          }}>
            {locale === 'ar' ? 'مرحباً بك في تطبيقك الجديد' : 'Welcome to Your New App'}
          </h1>
          <p style={{ 
            font: 'var(--t-typography-body-xl)', 
            color: 'var(--t-color-text-secondary)',
            margin: 0
          }}>
            {locale === 'ar' 
              ? 'مستعد لبدء البرمجة مع نظام التصميم الخاص بك!' 
              : 'Ready to start coding with your design system!'
            }
          </p>
        </div>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 'var(--t-space-400)' 
        }}>
          <p style={{ 
            font: 'var(--t-typography-body-lg-medium)', 
            color: 'var(--t-color-text-primary)',
            margin: 0
          }}>
            {locale === 'ar'
              ? 'هذا قالب نظيف وجاهز للاستخدام مع:'
              : 'This is a clean template ready to use with:'
            }
          </p>
          <ul style={{ 
            font: 'var(--t-typography-body-md)', 
            color: 'var(--t-color-text-secondary)', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'var(--t-space-200)',
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li>✨ Tagaddod Design System</li>
            <li>⚡ Vite + React + TypeScript</li>
            <li>🌍 RTL/LTR Support</li>
            <li>🎨 Modern Styling</li>
            <li>📚 Complete Component Documentation</li>
            <li>🤖 AI-Assisted Development (CLAUDE.md)</li>
          </ul>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 'var(--t-space-400)', 
          alignItems: 'center'
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: 'var(--t-space-300)', 
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <Button size="large" variant="primary">
              {locale === 'ar' ? 'ابدأ البناء' : 'Start Building'}
            </Button>
            <Button size="large" variant="secondary" onClick={toggleDirection}>
              {locale === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
            </Button>
          </div>
        </div>

        <div style={{ 
          marginTop: 'var(--t-space-1200)', 
          padding: 'var(--t-space-600)', 
          background: 'var(--t-color-fill-secondary)',
          borderRadius: 'var(--t-border-radius-150)',
          border: `var(--t-border-width-25) solid var(--t-color-border-primary)`,
          boxShadow: 'var(--t-shadow-1)'
        }}>
          <h2 style={{ 
            font: 'var(--t-typography-heading-md)', 
            color: 'var(--t-color-text-primary)',
            marginBottom: 'var(--t-space-300)',
            margin: 0
          }}>
            {locale === 'ar' ? 'الخطوات التالية:' : 'Next Steps:'}
          </h2>
          <div style={{ 
            textAlign: 'left', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'var(--t-space-200)'
          }}>
            <p style={{ 
              font: 'var(--t-typography-body-md)', 
              color: 'var(--t-color-text-secondary)',
              margin: 0
            }}>
              1. {locale === 'ar' 
                ? 'اضغط Cmd+Esc (Mac) أو Ctrl+Esc (Windows) لفتح Claude Code' 
                : 'Press Cmd+Esc (Mac) or Ctrl+Esc (Windows) to open Claude Code'
              }
            </p>
            <p style={{ 
              font: 'var(--t-typography-body-md)', 
              color: 'var(--t-color-text-secondary)',
              margin: 0
            }}>
              2. {locale === 'ar' 
                ? 'جرب قول: "أضف قسم ميزات مع 3 بطاقات"' 
                : 'Try saying: "Add a features section with 3 cards"'
              }
            </p>
            <p style={{ 
              font: 'var(--t-typography-body-md)', 
              color: 'var(--t-color-text-secondary)',
              margin: 0
            }}>
              3. {locale === 'ar' 
                ? 'أو: "أنشئ نموذج اتصال بالحقول المطلوبة"' 
                : 'Or: "Create a contact form with required fields"'
              }
            </p>
            <p style={{ 
              font: 'var(--t-typography-body-md)', 
              color: 'var(--t-color-text-secondary)',
              margin: 0
            }}>
              4. {locale === 'ar' 
                ? 'اطلب الشرح: "اشرح لي كيف يعمل هذا الكود"' 
                : 'Ask for explanations: "Explain how this code works"'
              }
            </p>
            <p style={{ 
              font: 'var(--t-typography-body-md-semibold)', 
              color: 'var(--t-color-text-brand)',
              margin: 0
            }}>
              🤖 {locale === 'ar' 
                ? 'Claude Code سيستخدم نظام Tagaddod التصميمي تلقائياً!' 
                : 'Claude Code will use Tagaddod Design System automatically!'
              }
            </p>
          </div>
        </div>
      </div>
      <Sonner position="bottom-right" />
    </div>
  )
}

export default App