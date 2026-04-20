import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Target, Users, TrendingUp, CheckCircle } from 'lucide-react';

export default function StrategyGuide() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Strategy Guide</h1>
              <p className="text-slate-400 text-sm">LSD Dual-Brand X Authority Building Strategy</p>
            </div>
          </div>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            READY FOR IMPLEMENTATION
          </Badge>
        </div>

        {/* Strategy Overview */}
        <Card className="bg-gradient-to-r from-amber-500/20 via-amber-600/10 to-amber-500/20 border-amber-500/30">
          <CardContent className="py-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-amber-500/30 flex items-center justify-center">
                  <Target className="w-8 h-8 text-amber-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">LSD Authority Building Strategy</h2>
                  <p className="text-amber-400 font-medium mb-2">Research-Informed Dual-Brand Framework</p>
                  <div className="flex items-center gap-4 text-sm text-slate-300">
                    <span>• Agent Fleet Research Foundation</span>
                    <span>• Dual-Brand Strategy</span>
                    <span>• 6-Month Implementation Roadmap</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">Target Market</p>
                <p className="text-amber-400 text-2xl font-bold">$50B by 2026</p>
                <p className="text-slate-400 text-sm">Tokenized Assets</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Executive Summary */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-amber-500/20 flex items-center justify-center text-amber-500 text-sm font-bold">1</div>
              Executive Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-slate-300">
                Transform <span className="text-amber-400 font-medium">@DigitalGold</span> and <span className="text-amber-400 font-medium">@LSD_Gold</span> into 
                the authoritative dual-voice for tokenized precious metals, driving LSD platform adoption through complementary personal and professional brand positioning.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <h4 className="font-medium text-white">@DigitalGold Strategy</h4>
                  </div>
                  <p className="text-sm text-blue-400 font-medium mb-1">"The Sound Money Rebel"</p>
                  <p className="text-xs text-slate-300">Passionate, accessible, contrarian education with "All Gas No Brakes" energy</p>
                  <div className="mt-3 pt-2 border-t border-blue-500/20">
                    <p className="text-xs text-slate-400">Target: 829 → 2,500+ followers (6 months)</p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-green-400" />
                    <h4 className="font-medium text-white">@LSD_Gold Strategy</h4>
                  </div>
                  <p className="text-sm text-green-400 font-medium mb-1">"Institutional Gold Standard"</p>
                  <p className="text-xs text-slate-300">Professional, data-driven, partnership-focused authority</p>
                  <div className="mt-3 pt-2 border-t border-green-500/20">
                    <p className="text-xs text-slate-400">Target: 62 → 750+ followers (6 months)</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Research Foundation */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-amber-500/20 flex items-center justify-center text-amber-500 text-sm font-bold">2</div>
              Research Foundation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  Sound Money Analysis
                </h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span><strong>@PeterSchiff:</strong> Unwavering consistency builds long-term credibility</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span><strong>@zerohedge:</strong> Contrarian positions drive 3-8x higher engagement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span><strong>@RealVision:</strong> Educational premium validates content monetization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span><strong>Key Insight:</strong> Historical content gets 60% higher shareability</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-400" />
                  Institutional DeFi Analysis
                </h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                    <span><strong>@centrifuge:</strong> Partnership content generates 300% higher reach</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                    <span><strong>Technical threads:</strong> 60% better B2B engagement rates</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                    <span><strong>Data transparency:</strong> 250% better performance vs conceptual posts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                    <span><strong>Optimal timing:</strong> 9-11 AM EST for institutional audience</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Timeline */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-amber-500/20 flex items-center justify-center text-amber-500 text-sm font-bold">3</div>
              Implementation Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-white mb-2">4-8 Week Foundation</h4>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>Week 1-2: Voice calibration and launch</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>Week 3-4: Engagement acceleration</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>Week 5-6: Authority building</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>Week 7-8: Community scale</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">3-6 Month Scale</h4>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>Month 2-3: Market leadership</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>Month 4-6: Ecosystem integration</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>Target: Top 3 market position</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>Goal: 50%+ platform attribution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Metrics */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-amber-500/20 flex items-center justify-center text-amber-500 text-sm font-bold">4</div>
              Success Metrics & KPIs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="text-blue-400 font-medium text-sm">30-Day Target</p>
                <p className="text-white font-bold">5%+ Engagement</p>
                <p className="text-xs text-slate-400">Voice differentiation</p>
              </div>
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="text-green-400 font-medium text-sm">60-Day Target</p>
                <p className="text-white font-bold">200%+ Growth</p>
                <p className="text-xs text-slate-400">@DigitalGold expansion</p>
              </div>
              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <p className="text-purple-400 font-medium text-sm">90-Day Target</p>
                <p className="text-white font-bold">Top 15 Position</p>
                <p className="text-xs text-slate-400">Market authority</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <p className="text-orange-400 font-medium text-sm">6-Month Target</p>
                <p className="text-white font-bold">Top 5 Market</p>
                <p className="text-xs text-slate-400">Industry leadership</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Readiness */}
        <Card className="bg-green-500/10 border border-green-500/30">
          <CardContent className="py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/30 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Ready for Implementation</h3>
                  <p className="text-green-400 font-medium">Complete strategy with research-backed framework</p>
                  <p className="text-slate-300 text-sm">Based on Agent Fleet competitive intelligence • Immediate start capability</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">Timeline</p>
                <p className="text-green-400 text-lg font-bold">Immediate</p>
                <p className="text-slate-400 text-sm">Ready to launch</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}