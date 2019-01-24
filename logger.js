class Logger {
	
	private currentLevel = 0;
	
	Level = {
		debug: 1,
		info: 2, 
		warn: 3,
		error: 4
	};
	
	public setLevel(level) {
		this.currentLevel = level;
	}

	public debug(msg: string, ... supportingDetails: any[]) {
		this.emitLogMessage("debug", msg, supportingDetails);
	}
	
	public info(msg: string, ... supportingDetails: any[]) {
		this.emitLogMessage("info", msg, supportingDetails);
	}
	
	public warn(msg: string, ... supportingDetails: any[]) {
		this.emitLogMessage("warn", msg, supportingDetails);
	}
	
	public error(msg: string, ... supportingDetails: any[]) {
		this.emitLogMessage("error", msg, supportingDetails);
	}
	
	private emitLogMessage(msgType, msg: String, supportingDetails: any[]) {
	
		if (this.Level[msgType] < this.currentLevel) {
			return;
		}
		
		if (supportingDetails.length > 0) {
			console[msgType](msg, supportingDetails);
		} else {
			console[msgType](msg);
		}
	}
}

const logger = new Logger();
logger.info('hello world', {}); 
logger.error('error!', new Error('msg')); 
logger.setLevel(logger.Level.warn); 
logger.warn('danger!'); 
logger.error('high danger!'); 
logger.info('everything is okay'); 
