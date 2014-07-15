package w11k.flash {
	import flash.external.ExternalInterface;
	
	import mx.core.FlexGlobals;

	public class AngularJSAdapter {
		
		private static var instance :AngularJSAdapter = new AngularJSAdapter();
		
		public static function getInstance() :AngularJSAdapter {
			return instance;
		}
		
		private var flashId :String;
				
		public function AngularJSAdapter()	{
			if (instance) {
				throw new Error("Singleton, use getInstance");
			}
			
			if (ExternalInterface.available) {
				const application :* = FlexGlobals.topLevelApplication;
				const parameters :* = application.parameters;
				
				flashId = parameters.w11kFlashId;
			}
			else {
				throw new Error('ExternalInterface has to be availabe to be able to use this adapter');
			}
			
			instance = this;
		}
		
		public function fireFlashReady() :void {
			ExternalInterface.call("w11kFlashIsReady", flashId);
		}
		
		public function call(expression :String, locals :Object = null) :* {
			return ExternalInterface.call("w11kFlashCall", flashId, expression, locals);
		}

        public function expose(externalName :String, func :Function) :void {
            ExternalInterface.addCallback(externalName, func);
        }
	}
}
