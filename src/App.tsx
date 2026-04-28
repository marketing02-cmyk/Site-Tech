import { 
  Zap, 
  Megaphone, 
  Filter, 
  Settings, 
  LayoutDashboard, 
  ArrowRight,
  TrendingDown,
  TrendingUp,
  BrainCircuit,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-navbar">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-start">
            <Zap className="text-gold w-8 h-8 fill-gold mt-1 shrink-0" />
            <div className="ml-2">
              <span className="block font-display font-black text-xl text-gold leading-none tracking-tight">TECH INTEGRADA</span>
              <span className="block text-[10px] text-muted-gray uppercase tracking-widest font-medium mt-0.5">Assessoria de Marketing e Comercial</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium hover:text-gold transition-colors">Home</a>
            <a href="#servicos" className="text-sm font-medium hover:text-gold transition-colors">Serviços</a>
            <a href="#resultados" className="text-sm font-medium hover:text-gold transition-colors">Resultados</a>
            <a href="#sobre" className="text-sm font-medium hover:text-gold transition-colors">Sobre Nós</a>
            <a href="#contato" className="text-sm font-medium hover:text-gold transition-colors">Contato</a>
          </div>

          <button className="gold-button flex items-center gap-2 text-sm">
            Solicitar Proposta
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 md:pt-56 md:pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center justify-center p-3 rounded-full bg-gold/10 border border-gold/20 mb-8"
          >
            <Zap className="text-gold w-6 h-6 fill-gold" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-title text-4xl md:text-6xl lg:text-7xl mb-6 leading-[1.1]"
          >
            Acelere suas Vendas com <br className="hidden md:block" />
            Tráfego e Automação Inteligente.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-gray text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Especialistas em conectar seu negócio ao público ideal através de anúncios, CRM e Inteligência Artificial.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="gold-button text-lg px-10 py-4 flex items-center justify-center gap-3 mx-auto group">
              <Zap className="w-5 h-5 fill-gold group-hover:scale-110 transition-transform" />
              Agendar Consultoria de Tráfego
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-charcoal/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="service-card">
              <Megaphone className="text-gold w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gold">Tráfego Pago de Alta Performance</h3>
              <p className="text-muted-gray leading-relaxed text-sm">Anúncios otimizados no Google, Meta e LinkedIn para escala real.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="service-card">
              <Filter className="text-gold w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gold">Captação de Leads e Funis</h3>
              <p className="text-muted-gray leading-relaxed text-sm">Crie funis de conversão eficientes e qualifique leads automaticamente.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeInUp} className="service-card">
              <div className="flex items-center gap-1 mb-6">
                <Settings className="text-gold w-10 h-10" />
                <Zap className="text-gold w-4 h-4 fill-gold animate-pulse" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gold">Automações de Vendas</h3>
              <p className="text-muted-gray leading-relaxed text-sm">Implemente fluxos automatizados e IA no seu processo de CRM.</p>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={fadeInUp} className="service-card">
              <LayoutDashboard className="text-gold w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gold">Consultoria de CRM & Dados</h3>
              <p className="text-muted-gray leading-relaxed text-sm">Otimize processos comerciais com inteligência de dados estratégica.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-display text-4xl md:text-5xl font-bold text-gold mb-16"
          >
            Nossos Resultados Comprovados
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Panel Left */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-charcoal p-10 rounded-3xl border border-white/5"
            >
              <div className="space-y-10">
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-soft-white font-medium">CPA Médio (Média de Clientes)</span>
                    <span className="text-success font-bold text-xl">Redução de -35%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gold shadow-[0_0_10px_rgba(255,215,0,0.4)]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-soft-white font-medium">Taxa de Conversão de Leads</span>
                    <span className="text-success font-bold text-xl">Aumento de +22%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '70%' }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-gold shadow-[0_0_10px_rgba(255,215,0,0.4)]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Panel Right */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-charcoal p-10 rounded-3xl border border-white/5 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="flex items-center gap-3 text-gold">
                  <BrainCircuit className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Análise de Dados com IA</h3>
                </div>
                <div className="flex items-center gap-2 bg-success/10 px-4 py-2 rounded-full border border-success/20">
                  <div className="w-2.5 h-2.5 bg-success rounded-full animate-pulse shadow-[0_0_10px_#22C55E]" />
                  <span className="text-success text-xs font-bold tracking-wider uppercase">Status: Alta Precisão</span>
                </div>
              </div>
              
              <p className="text-muted-gray text-lg leading-relaxed">
                Nossos especialistas utilizam Inteligência Artificial proprietária para otimizar campanhas em tempo real, gerando insights de valor que eliminam o desperdício de verba e maximizam o ROI.
              </p>
              
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-charcoal bg-white/10 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} alt="Avatar" />
                    </div>
                  ))}
                </div>
                <span className="text-xs text-muted-gray italic">+ de 50 empresas otimizadas este mês</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-start">
              <Zap className="text-gold w-10 h-10 fill-gold mt-1" />
              <div className="ml-3">
                <span className="block font-display font-black text-2xl text-gold leading-none tracking-tight">TECH INTEGRADA</span>
                <span className="block text-[10px] text-muted-gray uppercase tracking-widest font-medium mt-1">Assessoria de Marketing e Comercial</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex items-center gap-6 text-sm font-medium text-muted-gray">
                <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-gold transition-colors">Instagram</a>
                <a href="#" className="hover:text-gold transition-colors">WhatsApp</a>
              </div>
              <p className="text-xs text-muted-gray/50">© 2026 Tech Integrada. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
