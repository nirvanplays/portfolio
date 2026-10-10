// Completely silent no-op sound manager for clean professional portfolio
class SoundManager {
  public toggleMute(): boolean {
    return true;
  }
  public getMuted(): boolean {
    return true;
  }
  public playHover() {}
  public playClick() {}
  public playActivate() {}
  public playScan() {}
}

export const soundManager = new SoundManager();
